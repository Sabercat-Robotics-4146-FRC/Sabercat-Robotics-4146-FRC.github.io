const url = "https://www.sabercatrobotics.com";
const description = "The Sabercat Robotics blog; your perfect source for anything related to FIRST and our team.";
const locale = "en";
export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Blog",
    template: "%s | Sabercat Robotics Blog",
  },
  description,
  openGraph: {
    title: "Sabercat Robotics Blog",
    description: description,
    url: url,
    siteName: "Sabercat Robotics",
    images: [
      {
        url: "/assets/img/head-raw-large.png",
        width: 1200,
        height: 630,
        alt: "Sabercat Robotics",
      },
    ],
    locale: locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabercat Robotics Blog",
    description: description,
    images: [
      {
        url: "/assets/img/head-raw-large.png",
        width: 1200,
        height: 630,
        alt: "Sabercat Robotics",
      },
    ],
    siteId: "1067297456",
    creatorId: "1067297456",
  },
  alternates: {
    canonical: "/blog",
    languages: {
      "en": "/blog",
      // "es": "/es/blog",
      // "fr": "/fr/blog",
      // "ja": "/ja/blog",
    },
  },
};

export default function Layout({ children }) {
  return children;
};