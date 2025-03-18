import Image from "next/image";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { Link, type routing } from "~/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { GitHub, Instagram, LinkedIn, SabercatRobotics, X } from "./logos";
import { MailIcon, MapPinIcon } from "lucide-react";

const localeInfo = [
  {
    locale: "en-US",
    lang: "English (United States)",
  },
  // {
  //   locale: "es-MX",
  //   lang: "Español (México)",
  // },
  // {
  //   locale: "fr-CA",
  //   lang: "Français (Canada)",
  // },
  // {
  //   locale: "ja-JP",
  //   lang: "日本語 (日本)",
  // },
] as const satisfies {
  locale: typeof routing.defaultLocale;
  lang: string;
}[];
const links = [
  {
    href: "/",
    key: "home",
  },
  {
    href: "/tax-credit",
    key: "taxCredit",
  },
  {
    href: "/about",
    key: "about",
  },
  {
    href: "/about/awards",
    key: "awards",
  },
  {
    href: "/sponsors",
    key: "sponsorsAndPartners",
  },
  {
    href: "/about/sis",
    key: "sistersInStem",
  },
  {
    href: "/about/innovation-center",
    key: "innovationCenter",
  },
  {
    href: "/mentors",
    key: "mentors",
  },
  {
    href: "/contact",
    key: "contact",
  },
] as const satisfies {
  href: string;
  key: string;
}[];

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-center space-x-2 border-b border-slate-200 bg-slate-50 p-4 shadow-[0_-8px_16px] shadow-slate-950 md:justify-between">
      <Link href="/" className="flex items-center justify-center space-x-4">
        <SabercatRobotics
          role="presentation"
          aria-hidden
          className="h-auto w-12 fill-slate-950"
        />
        <h2 className="font-heading sr-only text-2xl font-bold min-[450px]:not-sr-only">
          {t("title")}
        </h2>
      </Link>
      <nav className="flex space-x-2">
        <Button
          variant="outline"
          className="hover:text-brand focus:text-brand hidden md:flex"
          asChild
        >
          <Link href="/">{t("home.title")}</Link>
        </Button>
        <Button
          variant="outline"
          className="hover:text-brand focus:text-brand hidden md:flex"
          asChild
        >
          <Link href="/about">{t("about.title")}</Link>
        </Button>
        <Button
          variant="outline"
          className="hover:text-brand focus:text-brand hidden md:flex"
          asChild
        >
          <Link href="/tax-credit">{t("taxCredit.title")}</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="hover:text-brand focus:text-brand"
              variant="outline"
              size="icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-label={t("language")}
                aria-hidden
                role="presentation"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">{t("language")}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-label={t("language")}
                aria-hidden
                role="presentation"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                  clipRule="evenodd"
                />
              </svg>
              {t("language")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {localeInfo.map(({ locale, lang }) => (
              <DropdownMenuItem className="p-0" key={locale}>
                <Button
                  variant="ghost"
                  className="hover:text-brand focus:text-brand w-full justify-start"
                  asChild
                >
                  <Link
                    href="/"
                    locale={locale}
                    hrefLang={locale}
                    lang={locale}
                  >
                    {lang}
                  </Link>
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger
            className="hover:text-brand focus:text-brand md:hidden"
            asChild
          >
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-label={t("menu.title")}
                aria-hidden
                role="presentation"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">{t("menu.title")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 space-y-0">
            <SheetHeader>
              <SheetTitle className="font-heading text-2xl font-bold">
                {t("menu.title")}
              </SheetTitle>
              <SheetDescription>{t("menu.description")}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 overflow-y-scroll border-y-2 border-slate-200 py-2">
              {links.map(({ href, key }) => (
                <Button
                  className="w-fit justify-start"
                  variant="ghost"
                  asChild
                  key={key}
                >
                  <Link href={href}>{t(`${key}.title`)}</Link>
                </Button>
              ))}
            </nav>
            <SheetFooter className="mt-auto">
              <Button variant="outline" asChild>
                <SheetClose>{t("menu.close")}</SheetClose>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

const socials = [
  {
    href: "https://instagram.com/sabercats4146/",
    text: "Instagram",
    icon: (
      <Instagram
        className="size-4"
        fill="currentColor"
        aria-hidden
        role="presentation"
        aria-label="Instagram"
      />
    ),
  },
  {
    href: "https://github.com/Sabercat-Robotics-4146-FRC/",
    text: "GitHub",
    icon: (
      <GitHub
        className="size-4"
        fill="currentColor"
        aria-hidden
        role="presentation"
        aria-label="GitHub"
      />
    ),
  },
  {
    href: "https://linkedin.com/in/sabercat-robotics-460090251/",
    text: "LinkedIn",
    icon: (
      <LinkedIn
        className="size-4"
        fill="currentColor"
        aria-hidden
        role="presentation"
        aria-label="LinkedIn"
      />
    ),
  },
  {
    href: "https://x.com/Sabercats4146/",
    text: "X",
    icon: (
      <X
        className="size-4"
        fill="currentColor"
        aria-hidden
        role="presentation"
        aria-label="X"
      />
    ),
  },
] as const satisfies {
  href: `https://${string}/${string}`;
  text: string;
  icon?: React.ReactNode;
}[];

export function Footer() {
  const t = useTranslations();

  const footerLinks = [
    {
      text: t("footer.company"),
      links: [
        {
          href: "/about",
          text: t("about.title"),
        },
        {
          href: "/about/awards",
          text: t("awards.title"),
        },
        {
          href: "/about/innovation-center",
          text: t("innovationCenter.title"),
        },
        {
          href: "/about/sis",
          text: t("sistersInStem.title"),
        },
      ],
    },
    {
      text: t("footer.resources"),
      links: [
        {
          href: "/tax-credit",
          text: t("taxCredit.title"),
        },
        {
          href: "/sponsors",
          text: t("sponsorsAndPartners.title"),
        },
        // {
        //   href: "/blog",
        //   text: t("blog.title"),
        // },
        {
          href: "/mentors",
          text: t("mentors.title"),
        },
        {
          href: "/contact",
          text: t("contact.title"),
        },
      ],
    },
    {
      text: t("footer.contact"),
      links: [
        {
          href: "/contact",
          text: t("contact.title"),
        },
        {
          href: `mailto:${t("contact.email")}`,
          text: t("contact.email"),
          icon: <MailIcon className="size-4" stroke="currentColor" />,
        },
        {
          href: "https://maps.app.goo.gl/25SioJ1JU4hxqWKU9",
          text: "6250 N 82nd St, Scottsdale, AZ 85250",
          icon: <MapPinIcon className="size-4" stroke="currentColor" />,
        },
      ],
    },
  ] as const satisfies {
    text: string;
    links: {
      href: `/${string}` | `https://${string}/${string}` | `mailto:${string}`;
      text: string;
      icon?: React.ReactNode;
    }[];
  }[];

  return (
    <footer className="mt-auto flex flex-col items-center space-y-2 bg-slate-50 p-4 shadow-[0_8px_16px] shadow-slate-950">
      <nav
        className="flex w-full max-w-(--breakpoint-2xl) flex-wrap space-y-2"
        role="navigation"
      >
        {footerLinks.map(function ({ text, links }) {
          return (
            <ul
              className="flex basis-1/2 list-none flex-col px-3 md:w-1/2 md:basis-1/2 lg:w-1/6 lg:basis-1/6"
              role="list"
              key={text}
            >
              <h2
                className="text-2xl font-semibold text-slate-950"
                role="heading"
              >
                {text}
              </h2>
              {links.map(function ({
                href,
                text: linkText,
                icon,
              }: (typeof links)[number] & { icon?: React.ReactNode }) {
                const props: React.ComponentPropsWithoutRef<typeof Link> =
                  href.startsWith("/")
                    ? { href }
                    : { href, target: "_blank", rel: "noopener noreferrer" };

                return (
                  <li
                    className="flex items-center space-x-2"
                    key={linkText}
                    role="listitem"
                  >
                    <Button
                      variant="link"
                      className="inline-flex h-auto justify-start gap-x-1 p-0 text-base font-normal whitespace-break-spaces text-slate-700"
                      asChild
                    >
                      <Link {...props}>
                        {icon}
                        <span className="inline">{linkText}</span>
                      </Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          );
        })}
        <ul className="flex basis-full list-none px-3 md:w-1/2 md:basis-1/2 lg:flex-col lg:items-end lg:justify-between">
          <ul className="flex space-x-3" role="list">
            {socials.map(function ({ href, text, icon }) {
              return (
                <li
                  className="flex items-center space-x-2"
                  key={text}
                  role="listitem"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:text-brand focus:text-brand text-slate-700"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      {icon}
                      <span className="sr-only">{text}</span>
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
          {/* <li className="flex items-center space-x-2" role="listitem">
            <button className="text-brand hover:bg-brand focus:bg-brand border-brand inline-flex items-center justify-center rounded-lg border-2 px-4 py-2 transition-colors duration-300 hover:text-slate-50 focus:text-slate-50">
              {t("footer.subscribe")}
            </button>
          </li> */}
        </ul>
      </nav>
      <footer className="flex w-full max-w-(--breakpoint-2xl) flex-col-reverse px-2 md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap items-center">
          {/* <Button
            variant="link"
            className="px-2 font-normal text-slate-500"
            asChild
          >
            <Link href="/legal/privacy">{t("privacy.title")}</Link>
          </Button>
          <Button
            variant="link"
            className="px-2 font-normal text-slate-500"
            asChild
          >
            <Link href="/legal/cookies">{t("cookies.title")}</Link>
          </Button> */}
          <Button
            variant="link"
            className="px-2 font-normal whitespace-break-spaces text-slate-500"
            asChild
          >
            <Link
              href="https://saguaromsaboosters.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("copyright", { year: new Date().getFullYear().toString() })}
            </Link>
          </Button>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-label={t("language")}
                aria-hidden
                role="presentation"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                  clipRule="evenodd"
                />
              </svg>
              {t("language")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-label={t("language")}
                aria-hidden
                role="presentation"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                  clipRule="evenodd"
                />
              </svg>
              {t("language")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {localeInfo.map(({ locale, lang }) => (
              <DropdownMenuItem className="p-0" key={locale}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link
                    href="/"
                    locale={locale}
                    hrefLang={locale}
                    lang={locale}
                  >
                    {lang}
                  </Link>
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </footer>
    </footer>
  );
}

export const homeCards = [
  {
    localeKey: "about",
    href: "/about",
    src: "/assets/img/impact.jpg",
    badge: "important",
  },
  {
    localeKey: "taxCredit",
    href: "/tax-credit",
    src: "/assets/img/tax-credit-generic.jpg",
    badge: "important",
  },
  {
    localeKey: "awards",
    href: "/about/awards",
    src: "/assets/img/awards.jpg",
  },
  {
    localeKey: "sponsorsAndPartners",
    href: "/sponsors",
    src: "/assets/img/sponsors-and-partners.jpg",
  },
  {
    localeKey: "innovationCenter",
    href: "/about/innovation-center",
    src: "/assets/img/innovation-center.jpg",
  },
  {
    localeKey: "sistersInStem",
    href: "/about/sis",
    src: "/assets/img/sistersinstem.jpg",
  },
  {
    localeKey: "mentors",
    href: "/mentors",
    src: "/assets/img/mentors.jpg",
  },
  {
    localeKey: "contact",
    href: "/contact",
    src: "/assets/img/15.jpg",
  },
  {
    localeKey: "comingSoon",
    src: "/assets/svg/clock.svg",
    disabled: true,
  },
] as const satisfies (
  | {
      localeKey: string;
      href: `/${string}`;
      src: `/${string}`;
      badge?: "important";
      disabled?: undefined;
    }
  | {
      localeKey: string;
      href?: undefined;
      src: `/${string}`;
      badge?: "important";
      disabled: true;
    }
)[];

export function PageHeader({
  title,
  description,
  src,
}: Readonly<{
  title: string;
  description: string;
  src: string;
}>) {
  return (
    <header className="bg-brand from-brand to-brand/85 flex flex-col items-center space-y-4 rounded-lg bg-linear-to-br p-4 shadow-lg sm:p-6 md:flex-row md:justify-between md:space-y-0 md:space-x-8">
      <main className="flex flex-col space-y-4 md:max-w-[50%] md:basis-1/2">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-slate-50">
          {title}
        </h1>
        <p className="text-lg font-semibold text-slate-100">{description}</p>
      </main>
      <Image
        src={src}
        alt={title}
        className="h-auto max-h-64 rounded-sm object-cover object-center shadow-sm md:max-w-[50%] md:basis-1/2"
        priority
        sizes="(max-width: 768px) 80vw, 40vw"
        width={4032}
        height={3024}
      />
    </header>
  );
}

export const topicOptions = [
  "mentorship",
  "sponsorship",
  "taxCredit",
  "programs",
  "innovationCenter",
  "other",
] as const satisfies string[];
