"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { usePostHog, PostHogProvider as PHProvider } from "posthog-js/react";
import { env } from "~/env";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { CircleHelpIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

export function PostHogProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "always",
      capture_pageview: true,
      persistence: "memory",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PostHogProvider>{children}</PostHogProvider>;
}

export function ConsentBanner() {
  const t = useTranslations("cookies");
  const bannerRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();
  const [consent, setConsent] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (consent === undefined && localStorage.getItem("consent")) {
      setConsent(localStorage.getItem("consent") === "true");
    }
    if (consent) {
      posthog.set_config({ persistence: "localStorage+cookie" });
      localStorage.setItem("consent", "true");
      bannerRef.current?.addEventListener("animationend", () => {
        bannerRef.current?.remove();
      });
    } else {
      posthog.set_config({ persistence: "memory" });
      if (consent === false) {
        localStorage.setItem("consent", "false");
      }
    }
    setIsLoading(false);
  }, [consent, bannerRef]);

  if (!isLoading && (consent === undefined || bannerRef.current !== null)) {
    return (
      <div
        data-consent={consent !== undefined}
        ref={bannerRef}
        className="data-[consent=false]:animate-in data-[consent=false]:slide-in-from-bottom data-[consent=true]:animate-out data-[consent=true]:slide-out-to-bottom fixed right-4 bottom-4 left-4 flex flex-col items-center justify-center rounded-2xl bg-slate-50 p-4 shadow-lg duration-300 sm:flex-row sm:justify-between"
      >
        <header className="flex items-center gap-2">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <Dialog>
            <DialogTrigger className="mt-1 cursor-pointer sm:hidden">
              <CircleHelpIcon className="size-5" />
            </DialogTrigger>
            <DialogContent className="gap-2">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">
                  {t("title")}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription>{t("description")}</DialogDescription>
            </DialogContent>
          </Dialog>
          <Tooltip>
            <TooltipTrigger className="mt-1 hidden cursor-help sm:block">
              <CircleHelpIcon className="size-5" />
            </TooltipTrigger>
            <TooltipContent className="flex w-72 flex-col gap-2 p-4">
              <span className="text-3xl font-bold">{t("title")}</span>
              <p className="text-sm text-slate-500">{t("description")}</p>
            </TooltipContent>
          </Tooltip>
        </header>
        <main className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <Button onClick={() => setConsent(true)}>{t("accept")}</Button>
          <Button variant="secondary" onClick={() => setConsent(false)}>
            {t("decline")}
          </Button>
        </main>
      </div>
    );
  }
}

export function OngoingCompetition({
  startDate,
  endDate,
}: Readonly<{
  startDate: Date;
  endDate: Date;
}>) {
  const t = useTranslations("home.competitions");

  const now = Date.now();

  if (now > startDate.getTime() && now < endDate.getTime()) {
    return (
      <p className="text-base font-medium text-slate-700 italic">
        {t("ongoing")}
      </p>
    );
  }
}
