import { type Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "~/components/global";
import metadata from "~/components/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  return await metadata({
    params,
    namespace: "innovationCenter",
    path: "/about/innovation-center",
  });
}

export default async function InnovationCenterPage({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("innovationCenter");

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/innovation-center.jpg"
      />
      <main>
        <Card>
          <CardHeader>
            <CardTitle>{t("about.title")}</CardTitle>
          </CardHeader>
          <CardContent>{t("about.content")}</CardContent>
        </Card>
      </main>
    </main>
  );
}
