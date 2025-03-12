import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "~/components/global";
import metadata from "~/components/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({ params, namespace: "about", path: "/about" });
}

export default async function AboutPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("about");

  const amountOfHistory = 7 as const satisfies number;

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/impact.jpg"
      />
      <main className="grid gap-4 py-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("overview.title")}</CardTitle>
          </CardHeader>
          <CardContent>{t("overview.content")}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("history.title")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            {Array.from({ length: amountOfHistory }).map((_, i) => (
              <p key={i}>{t(`history.content${i + 1}`)}</p>
            ))}
          </CardContent>
        </Card>
      </main>
    </main>
  );
}
