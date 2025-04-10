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
import { CircleHelpIcon, PlayIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import HLS from "hls.js";
import { cn } from "~/lib/utils";
import Image from "next/image";

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
        bannerRef.current?.addEventListener("animationend", () => {
          bannerRef.current?.remove();
        });
      }
    }
    setIsLoading(false);
  }, [consent, bannerRef, posthog]);

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

export interface HLSVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster: string;
  playButtonClassname?: string;
  width: number;
  height: number;
  imagePriority?: boolean;
  imageSizes: string;
}
export function HLSVideo({
  src,
  poster,
  playButtonClassname,
  width,
  height,
  imagePriority = false,
  imageSizes,
  autoPlay,
  className,
  ...props
}: HLSVideoProps) {
  const t = useTranslations("video");

  const ref = useRef<HTMLVideoElement>(null);

  const [canPlay, setCanPlay] = useState<boolean>(true);

  useEffect(() => {
    const { current: video } = ref;

    if (video) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else if (HLS.isSupported()) {
        const hls = new HLS();
        hls.loadSource(src);
        hls.attachMedia(video);
      }
      if (autoPlay ?? canPlay) {
        video.play().catch(function (err) {
          setCanPlay(false);
          console.warn(err);
        });
      }
    }
  }, [ref, canPlay]);

  if (!canPlay) {
    return (
      <div className={cn("relative overflow-clip", className)}>
        <Button
          className={cn(
            "absolute top-1/2 left-1/2 z-10 -translate-1/2",
            playButtonClassname,
          )}
          onClick={() => setCanPlay(true)}
          size="icon"
        >
          <span className="sr-only">{t("play")}</span>
          <PlayIcon
            aria-label={t("play")}
            role="presentation"
            aria-hidden
            fill="currentColor"
          />
        </Button>
        <Image
          src={poster}
          width={width}
          height={height}
          alt=""
          className="h-auto max-w-full"
          priority={imagePriority}
          sizes={imageSizes}
        />
        <div
          className="absolute top-0 right-0 bottom-0 left-0 z-5 size-full bg-slate-950/50"
          aria-hidden
          role="presentation"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <video
        ref={ref}
        poster={poster}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
}
