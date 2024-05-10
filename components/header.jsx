import Link from "next/link";
import Image from "next/image";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import LocaleLink from "./locale-link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { GlobeIcon } from "@radix-ui/react-icons";

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button role="menu" className="px-2 flex justify-center items-center gap-1 relative fill-neutral-900 hover:fill-yellow-500 focus-visible:fill-yellow-500 hover:text-yellow-500 focus-visible:text-yellow-500 transition-colors duration-300">
              <GlobeIcon role="presentation" />
              {
                Translate("Language")
              }
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex justify-center items-center gap-1">
              <GlobeIcon role="presentation" />
              {
                Translate("Language")
              }
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* For some reason, the 404 page breaks without this NextIntlClientProvider, despite not using the Translate function */}
            <NextIntlClientProvider>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <LocaleLink href="/" locale="en">
                    English
                  </LocaleLink>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <LocaleLink href="/" locale="es">
                    Español
                  </LocaleLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LocaleLink href="/" locale="fr">
                    Français
                  </LocaleLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LocaleLink href="/" locale="ja">
                    日本語
                  </LocaleLink>
                </DropdownMenuItem> */}
              </DropdownMenuGroup>
            </NextIntlClientProvider>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};