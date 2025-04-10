import { type Metadata } from "next";
import { Locale, Messages, NamespaceKeys, NestedKeyOf } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "~/i18n/routing";

export default async function metadata({
  params,
  isRootLayout,
  index,
  namespace,
  path,
}: {
  params: Promise<{ locale: Locale }>;
  isRootLayout?: boolean;
  index?: boolean;
  namespace?: NamespaceKeys<Messages, NestedKeyOf<Messages>>;
  path: string;
}) {
  const url = "https://sabercatrobotics.com";
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });
  const noNamespaceT = await getTranslations({ locale });
  const title = t("title");
  const description = t("description");

  const metadata: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: noNamespaceT("title"),
      images: [
        {
          url: "/assets/img/head-raw-large.png",
          width: 1200,
          height: 630,
          alt: noNamespaceT("alt"),
        },
      ],
      locale,
      alternateLocale: routing.locales.filter(
        (locale) => locale !== routing.defaultLocale,
      ),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/assets/img/head-raw-large.png",
          width: 1200,
          height: 630,
          alt: noNamespaceT("alt"),
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
      canonical: `${locale !== routing.defaultLocale ? `/${locale}` : ""}${path}`,
      languages: routing.locales
        .map((locale) => ({
          [locale]:
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            locale !== routing.defaultLocale ? `/${locale}${path}` : path,
        }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), { "x-default": path }),
    },
    robots: {
      index: index !== false,
      follow: true,
    },
  };

  if (isRootLayout) {
    metadata.title =
      metadata.twitter!.title =
      metadata.openGraph!.title =
        {
          default: title,
          template: `%s | ${noNamespaceT("title")}`,
        };
  }

  return metadata;
}
