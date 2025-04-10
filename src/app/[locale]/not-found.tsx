import { useTranslations } from "next-intl";
import { Link } from "~/components/global";
import metadata from "~/components/metadata";
import { Button } from "~/components/ui/button";

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

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="flex flex-col space-y-2 p-4">
      <h1 className="font-heading text-3xl font-bold">{t("title")}</h1>
      <p className="text-lg">{t("description")}</p>
      <Button variant="default" className="w-fit" asChild>
        <Link href="/">{t("back")}</Link>
      </Button>
    </main>
  );
}
