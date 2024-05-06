import Link from "next/link";
import Image from "next/image";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import LocaleLink from "./locale-link";

function InlineLink({ href, className, children }) {
  return (
    <Link href={href} className={cn("px-2 transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500", className)}>
      {children}
    </Link>
  );
};

export default function Header() {
  const Translate = useTranslations("Website.Headers");

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-center space-y-2 md:space-y-0 md:space-x-2 md:justify-between py-5 px-4 bg-white border-b shadow-black shadow-[0_-8px_16px]">
      <Link className="flex flex-nowrap items-center" href="/">
        <Image className="w-12 mr-4" src="/assets/img/head-raw-large.png" alt={Translate("Company") + " " + Translate("LogoAlt")} height={50} width={50} quality={100} sizes="3rem" />
        <h2 className="font-semibold">{Translate("Company")}</h2>
      </Link>
      <nav className="font-medium flex flex-wrap flex-col divide-y md:flex-row md:divide-x md:divide-y-0">
        <InlineLink href="/">
          {
            Translate("Home")
          }
        </InlineLink>
        <InlineLink href="/tax-credit">
          {
            Translate("TaxCredit")
          }
        </InlineLink>
        <InlineLink href="/awards">
          {
            Translate("Awards")
          }
        </InlineLink>
        <InlineLink href="/sponsors-and-partners">
          {
            Translate("SponsorsAndPartners")
          }
        </InlineLink>
        <button role="menu" className="px-2 group flex justify-center items-center gap-2 relative fill-neutral-900 hover:fill-yellow-500 focus-visible:fill-yellow-500 hover:text-yellow-500 focus-visible:text-yellow-500 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="presentation" className="h-4 w-4">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
          </svg>
          <p>
            {
              Translate("Language")
            }
          </p>
          <nav className="absolute left-0 top-[125%] bg-white flex flex-col flex-wrap justify-center w-full text-start transition-[opacity,transform] duration-300 opacity-0 scale-90 origin-top pointer-events-none group-focus:pointer-events-auto group-focus:opacity-100 group-focus:scale-100 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:scale-100 text-neutral-900 drop-shadow-[0px_0px_5px_rgb(0_0_0/.1)] before:absolute before:-top-[1rem] before:self-center before:w-8 before:h-4 before:bg-white before:[mask:url(/assets/img/caret-up.svg)_no-repeat]">
            <NextIntlClientProvider>
              <LocaleLink href="/" locale="en" role="menuitem">English</LocaleLink>
              {/* <LocaleLink href="/" locale="es" role="menuitem">Español</LocaleLink>
              <LocaleLink href="/" locale="fr">Français</LocaleLink>
              <LocaleLink href="/" locale="ja">日本語</LocaleLink> */}
            </NextIntlClientProvider>
          </nav>
        </button>
      </nav>
    </header>
  );
};