import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { homeCards } from "~/components/global";
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

function HomeCard(props: (typeof homeCards)[0]) {
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
          <Image
            src={src}
            alt={title}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 30vw"
            className="aspect-[1820/1213] w-full rounded bg-gray-300/50 py-16 shadow"
            width={1820}
            height={1213}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <main className="flex flex-wrap gap-2">
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

  return (
    <Link href={href as string}>
      <Card className="h-full transition-[box-shadow,transform] duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader className="p-4">
          <Image
            src={src}
            alt={title}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 30vw"
            className="aspect-[1820/1213] w-full rounded bg-gray-300/50 object-cover object-center shadow"
            width={1820}
            height={1213}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <header className="flex flex-wrap gap-2">
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

  const t = await getTranslations("home");
  const noNamespaceT = await getTranslations();

  return (
    <main className="flex flex-col gap-2" role="main">
      <header className="flex min-h-[calc(100vh-17.5625rem)] flex-col items-center gap-4 bg-gradient-to-br from-brand to-brand/85 p-4 sm:p-6 md:flex-row md:justify-between md:gap-8 md:p-8 lg:p-12">
        <main className="flex flex-col gap-2 md:max-w-[50%] md:basis-1/2">
          <header className="flex flex-wrap items-center gap-4">
            <Image
              src="/assets/img/head-raw-large-white.png"
              alt={noNamespaceT("title")}
              className="w-40 drop-shadow-sm"
              priority
              width={4620}
              height={3570}
            />
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
          <footer className="flex items-center gap-2">
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
          className="h-auto rounded-lg shadow md:max-w-[50%] md:basis-1/2"
          autoPlay
          muted
          loop
          playsInline
        >
          {t("noVideoSupport")}
          <source src="/assets/vid/robot.webm" type="video/webm" />
          <source src="/assets/vid/robot.mp4" type="video/mp4" />
        </video>
      </header>
      <main className="flex flex-col justify-center gap-y-4 px-6 py-12 text-slate-900">
        <header className="flex flex-col gap-2 px-4">
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
    </main>
  );
}
