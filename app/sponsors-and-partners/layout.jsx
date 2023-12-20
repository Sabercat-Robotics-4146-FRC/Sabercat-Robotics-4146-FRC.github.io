const url = "https://www.sabercatrobotics.com";
const title = "Sponsors & Partners";
const description = "We rely on the support of our community. Whether you're a local business, global conglomerate, or self employed, there's need for your support.";
const locale = "en";
export const metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title: `${title} | Sabercat Robotics`,
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
    title: `${title} | Sabercat Robotics`,
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
  alternates: {
    canonical: "/sponsors-and-partners",
    languages: {
      "en": "/sponsors-and-partners",
      // "es": "/es/sponsors-and-partners",
      // "fr": "/fr/sponsors-and-partners",
      // "ja": "/ja/sponsors-and-partners",
    },
  },
};

export default function Layout({children}) {
  return children;
};