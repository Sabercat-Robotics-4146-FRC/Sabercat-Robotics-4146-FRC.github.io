import { type Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader, Link } from "~/components/global";
import metadata from "~/components/metadata";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  return await metadata({
    params,
    namespace: "sistersInStem",
    path: "/about/sis",
  });
}

export default async function SistersInSTEMPage({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("sistersInStem");

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/sistersinstem.jpg"
      />
      <main>
        <Card>
          <CardHeader>
            <CardTitle>{t("about.title")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-3">
            <p>{t("about.content")}</p>
            <Button className="bg-pink-600 hover:bg-pink-600/90" asChild>
              <Link
                href="https://sistersinstem.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("about.link")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </main>
  );
}
