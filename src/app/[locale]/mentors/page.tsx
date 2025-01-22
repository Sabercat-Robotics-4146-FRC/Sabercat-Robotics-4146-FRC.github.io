import {
  getFormatter,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { PageHeader } from "~/components/global";
import metadata from "~/components/metadata";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Link } from "~/i18n/routing";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({ params, namespace: "mentors", path: "/mentors" });
}

export default async function MentorsPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("mentors");
  const formatter = await getFormatter();

  const mentors: Record<string, [number, boolean]> = {
    // Format: [mentorName]: [amountOfTitles, hasEmail]
    lindberg: [2, true],
    brandt: [1, true],
    ruskin: [3, true],
    smith: [2, false],
    olson: [1, false],
    arnold: [1, false],
  };

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/15.jpg"
      />
      <main className="flex flex-col space-y-4 px-4 py-2">
        <section className="flex flex-col space-y-2">
          <h2 className="font-heading text-2xl font-bold">{t("why.title")}</h2>
          <p className="text-lg">{t("why.content")}</p>
        </section>
        <section className="flex flex-col space-y-2">
          <h2 className="font-heading text-2xl font-bold">{t("who.title")}</h2>
          <main className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(mentors).map(function (mentor) {
              const [amountOfTitles, hasEmail] = mentors[mentor]!;
              return (
                <Card key={mentor}>
                  <CardHeader>
                    <CardTitle>{t(`who.${mentor}.title`)}</CardTitle>
                    <CardDescription>
                      {formatter.list(
                        Array.from({ length: amountOfTitles }).map((_, i) =>
                          t(`who.${mentor}.title${i + 1}`),
                        ),
                        { type: "conjunction" },
                      )}
                    </CardDescription>
                  </CardHeader>
                  {hasEmail && (
                    <CardContent>
                      {t.rich("who.email", {
                        mentor: t(`who.${mentor}.title`),
                        emailLink(chunks) {
                          const email = t(`who.${mentor}.email`);
                          return (
                            <Button
                              className="h-max p-0 text-base font-normal text-brand"
                              variant="link"
                              asChild
                            >
                              <Link
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {chunks}
                              </Link>
                            </Button>
                          );
                        },
                        email: t(`who.${mentor}.email`),
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
