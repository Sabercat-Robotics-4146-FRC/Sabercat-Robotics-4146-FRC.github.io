import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader, Link } from "~/components/global";
import metadata from "~/components/metadata";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({
    params,
    namespace: "sponsorsAndPartners",
    path: "/sponsors",
  });
}

export default async function SponsorsPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("sponsorsAndPartners");

  const sponsors = [
    // Format: [sponsorName, hasWebsite, websiteUrl?]
    ["susdFoundation", true, new URL("https://susdfoundation.org/")],
    ["farleyFamilyFoundation", false],
    ["boeing", true, new URL("https://www.boeing.com/")],
    ["raytheonTechnologies", true, new URL("https://www.rtx.com/")],
    ["rowlandFamilyFund", false],
    ["soarFoundation", false],
    ["microchipTechnology", true, new URL("https://www.microchip.com/")],
  ] as const satisfies Array<[string, true, URL] | [string, false]>;

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/15.jpg"
      />
      <main className="flex flex-col space-y-4 px-4 py-2">
        <section className="flex flex-col space-y-2">
          <h2 className="font-heading text-2xl font-bold">
            {t("sponsors.title")}
          </h2>
          <main className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map(function ([sponsorName, hasWebsite, websiteUrl]) {
              const sponsor = t(`sponsors.${sponsorName}`);

              return (
                <Card key={sponsorName}>
                  <CardHeader>
                    <CardTitle>{sponsor}</CardTitle>
                  </CardHeader>
                  {hasWebsite && (
                    <CardContent>
                      {t.rich("sponsors.visit", {
                        sponsorName: sponsor,
                        websiteLink(chunks) {
                          return (
                            <Button
                              className="text-brand h-max p-0 text-base font-normal"
                              variant="link"
                              asChild
                            >
                              <Link
                                href={websiteUrl.toString()}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {chunks}
                              </Link>
                            </Button>
                          );
                        },
                        website: websiteUrl.toString(),
                      })}
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </main>
        </section>
      </main>
    </main>
  );
}
