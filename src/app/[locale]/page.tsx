import { pick } from "lodash";
import { ClockIcon, MapPinIcon } from "lucide-react";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import {
  getFormatter,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import Image from "next/image";
import { OngoingCompetition } from "~/components/client";
import { homeCards } from "~/components/global";
import { SabercatRobotics } from "~/components/logos";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Link } from "~/i18n/routing";
import { cn } from "~/lib/utils";

function HomeCard(
  props: Omit<
    (typeof homeCards)[number],
    "href" | "src" | "badge" | "disabled"
  > & {
    href?: string;
    src?: string;
    badge?: "important";
    disabled?: true;
  },
) {
  const { localeKey, src, badge } = props;

  const t = useTranslations();

  if (props.disabled !== undefined) {
    const { disabled } = props;

    const title = t("home.mission." + localeKey + ".title");
    const description = t("home.mission." + localeKey + ".description");

    return (
      <Card
        className={cn(
          "h-full",
          disabled && "cursor-not-allowed opacity-50",
          !disabled && "transition-shadow hover:shadow-lg",
        )}
      >
        <CardHeader className="p-4">
          <AspectRatio ratio={1820 / 1213}>
            <ClockIcon
              className="aspect-1820/1213 h-full w-full rounded-sm bg-gray-300/50 py-16 shadow-sm"
              width={1820}
              height={1213}
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <main className="flex flex-wrap space-x-2">
            <CardTitle>{title}</CardTitle>
            {badge && (
              <Badge variant="default">{t(`home.mission.${badge}`)}</Badge>
            )}
          </main>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    );
  }

  const title = t(localeKey + ".title");
  const description = t(localeKey + ".description");

  const { href } = props;

  if (!src) {
    throw new Error("src is required");
  }

  return (
    <Link href={href as string}>
      <Card className="h-full transition-[box-shadow,scale] duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader className="p-4">
          <Image
            src={src}
            alt={title}
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 25vw"
            className="aspect-1820/1213 h-full w-full rounded-sm bg-gray-300/50 object-cover object-center shadow-sm"
            width={1820}
            height={1213}
          />
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <header className="flex flex-wrap space-x-2">
            <CardTitle>{title}</CardTitle>
            {badge && (
              <Badge variant="default">{t(`home.mission.${badge}`)}</Badge>
            )}
          </header>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default async function HomePage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({ namespace: "home", locale });
  const noNamespaceT = await getTranslations({ locale });
  const formatter = await getFormatter({ locale });
  const messages = await getMessages({ locale });

  // Sorted by earliest to latest, format: [competition]: [startDate, endDate]
  const competitions = [
    [new Date(2025, 2, 13), new Date(2025, 2, 15)],
    [new Date(2025, 2, 19), new Date(2025, 2, 22)],
  ] as const satisfies [Date, Date][];

  return (
    <main className="flex flex-col space-y-2" role="main">
      <header className="bg-brand from-brand to-brand/85 flex min-h-[calc(100vh-17.5625rem)] flex-col items-center space-y-4 bg-linear-to-br p-4 sm:p-6 md:flex-row md:justify-between md:space-x-8 md:p-8 lg:p-12">
        <main className="flex flex-col space-y-2 md:max-w-[50%] md:basis-1/2">
          <header className="flex flex-wrap items-center">
            <SabercatRobotics className="mr-4 h-auto w-40 fill-slate-50 drop-shadow-xs" />
            <main className="flex flex-col">
              <h1 className="font-heading text-5xl font-bold tracking-tight text-slate-50">
                {noNamespaceT("title")}
              </h1>
              <p className="text-lg font-semibold text-slate-100">
                {t("hero.team")}
              </p>
            </main>
          </header>
          <main className="text-slate-50">
            <p className="text-2xl">{t("hero.mission")}</p>
          </main>
          <footer className="flex items-center space-x-2">
            <Button
              variant="default"
              className="bg-slate-100 text-slate-900 hover:bg-slate-100/90"
              asChild
            >
              <Link href="/about">{t("hero.buttons.about")}</Link>
            </Button>
          </footer>
        </main>
        <video
          width={852}
          height={480}
          className="h-auto rounded-lg shadow-sm md:max-w-[50%] md:basis-1/2"
          autoPlay
          muted
          loop
          playsInline
        >
          {t("noVideoSupport")}
          <source
            src="https://j45q6n96a7.ufs.sh/f/nsUZWhaMhq5X9fx7do6Xj7nHtJeLs6fiM0wcWudK8ryo2Thq"
            type="video/webm"
          />
          <source
            src="https://j45q6n96a7.ufs.sh/f/nsUZWhaMhq5XmTNzPF06c3IpGS5btWVJjqNLQvU9ghoEM2yZ"
            type="video/mp4"
          />
        </video>
      </header>
      <main className="flex flex-col justify-center space-y-4 px-6 py-12 pb-0 text-slate-900">
        <header className="flex flex-col space-y-2 px-4">
          <h2 className="font-heading text-3xl font-bold text-slate-950">
            {t("mission.title")}
          </h2>
          <p className="text-lg">{t("mission.description")}</p>
        </header>
        <main className="grid gap-6 *:h-full md:grid-cols-2 lg:grid-cols-3">
          {homeCards.map(function (homeCard) {
            return <HomeCard key={homeCard.localeKey} {...homeCard} />;
          })}
        </main>
      </main>
      <footer className="flex flex-col justify-center space-y-4 px-6 py-12 text-slate-900">
        <header className="flex flex-col space-y-2 px-4">
          <h2 className="font-heading text-3xl font-bold text-slate-950">
            {t("competitions.title")}
          </h2>
          <p className="text-lg">{t("competitions.description")}</p>
        </header>
        <main className="grid gap-6 *:h-full md:grid-cols-2">
          {competitions.map(function ([startDate, endDate], index) {
            const title = t(`competitions.competition${index + 1}.title`);
            const location = t(`competitions.competition${index + 1}.location`);

            return (
              <Card key={title}>
                <CardContent className="flex flex-col gap-1.5 p-6">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPinIcon
                      aria-label={t("competitions.location")}
                      className="size-4"
                      stroke="currentColor"
                    />
                    {location}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-1">
                    <ClockIcon
                      aria-label={t("competitions.dates")}
                      className="size-4"
                      stroke="currentColor"
                    />
                    {formatter.dateTimeRange(startDate, endDate, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                  <NextIntlClientProvider
                    messages={pick(messages, "home.competitions.ongoing")}
                  >
                    <OngoingCompetition
                      startDate={startDate}
                      endDate={endDate}
                    />
                  </NextIntlClientProvider>
                </CardContent>
              </Card>
            );
          })}
        </main>
      </footer>
    </main>
  );
}
