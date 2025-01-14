import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
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

const localeInfo: {
  locale: string;
  lang: string;
}[] = [
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
];
const links: {
  href: string;
  key: string;
}[] = [
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
    href: "/about/mentors",
    key: "mentors",
  },
  {
    href: "/contact",
    key: "contact",
  },
];

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-2 border-b bg-slate-50 p-4 shadow-[0_-8px_16px] shadow-black md:justify-between">
      <Link href="/" className="flex items-center justify-center gap-x-4">
        <Image
          src="/assets/img/head-raw-large.png"
          alt={t("title")}
          role="presentation"
          aria-hidden
          width={4620}
          height={3570}
          className="w-12"
        />
        <h2 className="font-heading text-2xl font-bold">{t("title")}</h2>
      </Link>
      <nav className="flex flex-wrap gap-2 md:flex-row">
        <Button
          variant="outline"
          className="hidden hover:text-brand focus:text-brand md:flex"
          asChild
        >
          <Link href="/">{t("home.title")}</Link>
        </Button>
        <Button
          variant="outline"
          className="hidden hover:text-brand focus:text-brand md:flex"
          asChild
        >
          <Link href="/about">{t("about.title")}</Link>
        </Button>
        <Button
          variant="outline"
          className="hidden hover:text-brand focus:text-brand md:flex"
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
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center gap-2">
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
                  className="w-full justify-start hover:text-brand focus:text-brand"
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
          <SheetContent>
            <SheetHeader className="py-2">
              <SheetTitle className="font-heading text-2xl font-bold">
                {t("menu.title")}
              </SheetTitle>
              <SheetDescription>{t("menu.description")}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 border-y-2 py-2">
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
            <SheetFooter className="py-2">
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

const socials: {
  href: `https://${string}/${string}`;
  text: string;
  icon?: React.ReactNode;
}[] = [
  {
    href: "https://instagram.com/sabercats4146/",
    text: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="size-4"
        aria-label="Instagram"
        aria-hidden
        role="presentation"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Sabercat-Robotics-4146-FRC/",
    text: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        fill="currentColor"
        className="size-4"
        aria-label="GitHub"
        aria-hidden
        role="presentation"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/sabercat-robotics-460090251/",
    text: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="size-4"
        aria-label="LinkedIn"
        aria-hidden
        role="presentation"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/SabercatRobotics4146/",
    text: "X",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="size-4"
        aria-label="X"
        aria-hidden
        role="presentation"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
  },
];

export function Footer() {
  const t = useTranslations();

  const footerLinks: {
    text: string;
    links: {
      href: `/${string}` | `https://${string}/${string}` | `mailto:${string}`;
      text: string;
      icon?: React.ReactNode;
    }[];
  }[] = [
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
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          ),
        },
        {
          href: "https://maps.app.goo.gl/25SioJ1JU4hxqWKU9",
          text: "6250 N 82nd St, Scottsdale, AZ 85250",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <footer className="mt-auto flex flex-col items-center gap-2 bg-slate-50 p-4 shadow-[0_8px_16px] shadow-black">
      <nav
        className="flex w-full max-w-screen-2xl flex-wrap gap-y-2"
        role="navigation"
      >
        {footerLinks.map(function ({ text, links }) {
          return (
            <ul
              className="flex basis-1/2 list-none flex-col px-3 md:w-1/2 md:basis-1/2 lg:w-1/6 lg:basis-1/6"
              role="list"
              key={text}
            >
              <h2 className="text-2xl font-semibold text-slate-950">{text}</h2>
              {links.map(function ({ href, text: linkText, icon }) {
                const props: React.ComponentProps<typeof Link> =
                  href.startsWith("?")
                    ? { href }
                    : { href, target: "_blank", rel: "noopener noreferrer" };

                return (
                  <li
                    className="flex items-center gap-2"
                    key={linkText}
                    role="listitem"
                  >
                    <Button
                      variant="link"
                      className="inline-flex h-auto justify-start gap-1 whitespace-break-spaces p-0 text-base font-normal text-slate-700"
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
        <ul
          className="flex basis-full list-none px-3 md:w-1/2 md:basis-1/2 lg:flex-col lg:items-end lg:justify-between"
          role="list"
        >
          <ul className="flex gap-3" role="list">
            {socials.map(function ({ href, text, icon }) {
              return (
                <li
                  className="flex items-center gap-2"
                  key={text}
                  role="listitem"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-slate-700 hover:text-brand focus:text-brand"
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
          {/* <li className="flex items-center gap-2" role="listitem">
            <button className="text-brand hover:bg-brand focus:bg-brand border-brand inline-flex items-center justify-center rounded-lg border-2 px-4 py-2 transition-colors duration-300 hover:text-slate-50 focus:text-slate-50">
              {t("footer.subscribe")}
            </button>
          </li> */}
        </ul>
      </nav>
      <footer className="flex w-full max-w-screen-2xl flex-col-reverse px-2 md:flex-row md:items-center md:justify-between">
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
            className="whitespace-break-spaces px-2 font-normal text-slate-500"
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
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center gap-2">
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

export const homeCards: (
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
)[] = [
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
];

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
    <header className="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-br from-brand to-brand/85 p-4 shadow-lg sm:p-6 md:flex-row md:justify-between md:gap-8">
      <main className="flex flex-col gap-4 md:max-w-[50%] md:basis-1/2">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-slate-50">
          {title}
        </h1>
        <p className="text-lg font-semibold text-slate-100">{description}</p>
      </main>
      <Image
        src={src}
        alt={title}
        className="h-auto max-h-64 rounded object-cover object-center shadow md:max-w-[50%] md:basis-1/2"
        priority
        sizes="(max-width: 768px) 80vw, 40vw"
        width={4032}
        height={3024}
      />
    </header>
  );
}

export const topicOptions: Readonly<[string, ...string[]]> = [
  "mentorship",
  "sponsorship",
  "taxCredit",
  "programs",
  "innovationCenter",
  "other",
];
