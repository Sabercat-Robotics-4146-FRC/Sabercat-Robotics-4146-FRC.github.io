import "~/styles/globals.css";
import { notFound } from "next/navigation";
import { Arvo, Open_Sans } from "next/font/google";
import { routing } from "~/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { cn } from "~/lib/utils";
import { Header, Footer } from "~/components/global";
import metadata from "~/components/metadata";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
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
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.defaultLocale)) {
    notFound();
  }

  setRequestLocale(locale);

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
