import "~/styles/globals.css";
import { notFound } from "next/navigation";
import { Arvo, Open_Sans } from "next/font/google";
import { routing } from "~/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { cn } from "~/lib/utils";
import { Header, Footer } from "~/components/global";
import metadata from "~/components/metadata";
import { ConsentBanner, Providers } from "~/components/client";
import { type Locale, NextIntlClientProvider } from "next-intl";
import { pick } from "lodash";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  return await metadata({ params, path: "/", isRootLayout: true });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const arvo = Arvo({
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-heading",
});
const openSans = Open_Sans({
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-open-sans",
});
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.defaultLocale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="bg-slate-50">
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans text-slate-950",
          arvo.variable,
          openSans.variable,
        )}
      >
        <Header />
        <Providers>{children}</Providers>
        <Footer />
        <NextIntlClientProvider
          messages={pick(
            messages,
            "cookies.title",
            "cookies.description",
            "cookies.accept",
            "cookies.decline",
          )}
        >
          <ConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
