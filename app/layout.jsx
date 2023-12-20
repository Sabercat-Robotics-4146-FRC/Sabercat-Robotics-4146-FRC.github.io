import "/css/globals.css";
import Header from "/components/header";
import ClientCookiesProvider from "/components/cookie-provider"
import CookieConsent from "/components/cookie-consent";
import Footer from "/components/footer";
import localFont from "next/font/local";
import Script from "next/script";
import { cookies } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const url = "https://www.sabercatrobotics.com";
const title = "Sabercat Robotics";
const description = "Sabercat Robotics: Inspiring high schoolers through robots. A 501c charity Robotics team shaping future innovators.";
const locale = "en";
export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: "Sabercat Robotics",
    images: [
      {
        url: "/assets/img/head-raw-large.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      {
        url: "/assets/img/head-raw-large.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    siteId: "1067297456",
    creatorId: "1067297456",
  },
  manifest: "/assets/ico/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/assets/ico/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/assets/ico/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        url: "/assets/ico/favicon.ico",
        sizes: "48x48",
      },
      {
        url: "/assets/ico/android-chrome-192x192.png",
        sizes: "192x192",
      },
    ],
    shortcut: ["/assets/ico/favicon.ico"],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/assets/ico/apple-touch-icon.png",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      // "es": "/localization/es",
      // "fr": "/localization/fr",
      // "ja": "/localization/ja",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Objective = localFont({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["sans-serif"],
  src: [
    {
      path: "../public/assets/fonts/Objective-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Objective-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Objective-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});
export default function RootLayout({children}) {
  return (
    <html className={`scroll-smooth selection:bg-yellow-500 selection:text-white ${Objective.className}`} lang={locale}>
      <body className="text-lg leading-7 text-neutral-900">
        <Header />
        {children}
        <SpeedInsights />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8MHGG86QKT" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            };
            gtag("consent", "default", {
              "ad_storage": "denied",
              "analytics_storage": "denied",
            });
            gtag("js", new Date());
            gtag("config", "G-8MHGG86QKT");
          `}
        </Script>
        <ClientCookiesProvider value={cookies().getAll()}>
          <CookieConsent />
        </ClientCookiesProvider>
        <Footer />
      </body>
    </html>
  );
};