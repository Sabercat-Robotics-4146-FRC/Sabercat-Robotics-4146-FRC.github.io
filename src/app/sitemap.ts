import { type MetadataRoute } from "next";
import { type Languages } from "next/dist/lib/metadata/types/alternative-urls-types";
import { routing } from "~/i18n/routing";

function getAlternates(
  path: `https://sabercatrobotics.com/${string}`,
): Languages<string> {
  const alternatesArray = routing.locales.map(
    function (locale): Languages<string> {
      if (locale === routing.defaultLocale) {
        return {
          [locale]: path,
        };
      } else {
        return {
          [locale]: path.replace(
            "https://sabercatrobotics.com/",
            `https://sabercatrobotics.com/${locale}/`,
          ),
        };
      }
    },
  );
  const alternates = alternatesArray.reduce(
    function (acc, alternates) {
      return { ...acc, ...alternates };
    },
    { "x-default": path },
  );
  return alternates;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sabercatrobotics.com/",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/"),
      },
    },
    {
      url: "https://sabercatrobotics.com/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/about"),
      },
    },
    {
      url: "https://sabercatrobotics.com/about/awards",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/about/awards"),
      },
    },
    {
      url: "https://sabercatrobotics.com/about/innovation-center",
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.4,
      alternates: {
        languages: getAlternates(
          "https://sabercatrobotics.com/about/innovation-center",
        ),
      },
    },
    {
      url: "https://sabercatrobotics.com/about/sis",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/about/sis"),
      },
    },
    {
      url: "https://sabercatrobotics.com/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/contact"),
      },
    },
    {
      url: "https://sabercatrobotics.com/mentors",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/mentors"),
      },
    },
    {
      url: "https://sabercatrobotics.com/sponsors",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/sponsors"),
      },
    },
    {
      url: "https://sabercatrobotics.com/tax-credit",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: getAlternates("https://sabercatrobotics.com/tax-credit"),
      },
    },
  ];
}
