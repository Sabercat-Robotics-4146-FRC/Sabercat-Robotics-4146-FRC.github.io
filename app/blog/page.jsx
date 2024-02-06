import PageHeader from "@/components/page-header";
import { Suspense } from "react";
import { readdirSync } from "fs";
import Link from "next/link";
import Image from "next/image";

async function BlogPost({ filePath }) {
  const { title, description, image } = await import(`@/app/blog/(posts)/${filePath}`);
  if (title && description && image) {
    return (
      <section className="w-full">
        <Link href={`/blog/${filePath.replace("/page.mdx", "")}`} className="text-start group">
          <Image src={image} height={1280} width={1920} alt={title} className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]" sizes="(max-width: 767px) 90vw, 30vw" />
          <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">{title}</h3>
          <p className="px-2">{description}</p>
        </Link>
      </section>
    );
  };
  console.warn("No metadata in page.mdx file.");
};

export default function Page() {
  const BlogChildren = readdirSync("./app/blog/(posts)", {
    withFileTypes: true,
  });
  const Directories = BlogChildren.filter(function(Directory) {
    return Directory.isDirectory();
  });

  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Blog" description="The Sabercat Robotics blog; your perfect source for anything related to FIRST and our team." src="/assets/img/15.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900 mb-4 text-center">
          <h2 className="text-3xl font-semibold">Blog Posts</h2>
          <p>We want you to know what&apos;s going on in the Robotics scene. That&apos;s why we write about FIRST, our team, Robotics, and more.</p>
        </header>
        <main className="flex flex-col flex-wrap md:grid md:grid-cols-3 w-full space-y-6 md:space-y-0 md:gap-6">
          <Suspense fallback={
            <p>Loading blog posts...</p>
          }>
            {
              Directories.map(function(Directory) {
                const Files = readdirSync(`${Directory.path}/${Directory.name}`, {
                  withFileTypes: true,
                });
                const Page = Files.filter(function(File) {
                  return File.isFile() && File.name === "page.mdx";
                })[0];
                if (Page) {
                  return (
                    <BlogPost filePath={`${Directory.name}/${Page.name}`} key={Page.name} />
                  );
                } else {
                  console.warn("No page.mdx file found.");
                };
              })
            }
            {
              (function() {
                if (Directories.length === 0) {
                  return (
                    <p>Sorry, but it seems like there aren&apos;t any blog posts here yet. Check back again soon!</p>
                  );
                };
              })()
            }
          </Suspense>
        </main>
      </main>
    </main>
  );
};