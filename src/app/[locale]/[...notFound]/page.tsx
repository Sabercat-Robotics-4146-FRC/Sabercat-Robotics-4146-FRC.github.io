import { notFound } from "next/navigation";
import metadata from "~/components/metadata";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({
    params,
    namespace: "notFound",
    path: "/not-found",
    index: false,
  });
}

export default function CatchAllPage() {
  notFound();
}
