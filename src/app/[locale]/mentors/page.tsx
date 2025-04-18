import { type Locale } from "next-intl";
import {
  getFormatter,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { PageHeader, Link } from "~/components/global";
import metadata from "~/components/metadata";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  return await metadata({ params, namespace: "mentors", path: "/mentors" });
}

export default async function MentorsPage({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("mentors");
  const formatter = await getFormatter();

  const mentors = {
    // Format: [mentorName]: [amountOfTitles, hasEmail]
    lindberg: [2, true],
    brandt: [1, true],
    ruskin: [3, true],
    smith: [2, false],
    olson: [1, false],
    arnold: [1, false],
  } as const satisfies Record<string, [number, boolean]>;

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/mentors.jpg"
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
              const [amountOfTitles, hasEmail] =
                mentors[mentor as keyof typeof mentors];
              return (
                <Card key={mentor}>
                  <CardHeader>
                    <CardTitle>
                      {t(`who.${mentor as keyof typeof mentors}.title`)}
                    </CardTitle>
                    <CardDescription>
                      {formatter.list(
                        Array.from({ length: amountOfTitles }).map((_, i) =>
                          t(
                            // @ts-expect-error
                            `who.${mentor as keyof typeof mentors}.title${i + 1}`,
                          ),
                        ),
                        { type: "conjunction" },
                      )}
                    </CardDescription>
                  </CardHeader>
                  {hasEmail && (
                    <CardContent>
                      {t.rich("who.email", {
                        mentor: t(
                          `who.${mentor as keyof typeof mentors}.title`,
                        ),
                        emailLink(chunks) {
                          const email = t(`who.${mentor as "lindberg"}.email`);
                          return (
                            <Button
                              className="text-brand h-max p-0 text-base font-normal"
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
                        email: t(`who.${mentor as "lindberg"}.email`),
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
