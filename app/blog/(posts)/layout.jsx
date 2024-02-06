import "/css/markdown.css";
import PageHeader from "@/components/page-header";
import { headers } from "next/headers";

export async function generateMetadata() {
  const nextHeaders = headers();
  const url = "https://www.sabercatrobotics.com";
  const path = nextHeaders.get("X-Blog-Path");
  const { title, description, image, locale } = await import(`@/app/blog/(posts)/${path}/page.mdx`);

  return {
    metadataBase: new URL(url),
    title,
    description,
    openGraph: {
      title: `${title} | Sabercat Robotics Blog`,
      description,
      url,
      siteName: "Sabercat Robotics",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Sabercat Robotics Blog`,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteId: "1067297456",
      creatorId: "1067297456",
    },
    alternates: {
      canonical: `/blog/${path}`,
      languages: {
        "en": `/blog/${path}`,
        // "es": `/es/blog/${path}`,
        // "fr": `/fr/blog/${path}`,
        // "ja": `/ja/blog/${path}`,
      },
    },
  };
};

export default async function Layout({ children }) {
  const { title, description, openGraph: { images } } = await generateMetadata();

  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title={title} description={description} src={images[0].url} />
      <main className="px-6 min-[480px]:px-12">
        {children}
      </main>
    </main>
  );
};