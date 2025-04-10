import { type Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader, Link } from "~/components/global";
import metadata from "~/components/metadata";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  return await metadata({
    params,
    namespace: "taxCredit",
    path: "/tax-credit",
  });
}

export default async function TaxCreditPage({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("taxCredit");

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/tax-credit-generic.jpg"
      />
      <main className="flex flex-col space-y-4 px-4 py-2">
        <section className="flex flex-col space-y-2">
          <h2 className="font-heading text-2xl font-bold">
            {t.rich("you.title", {
              underline: (chunks) => (
                <u className="decoration-brand underline underline-offset-4">
                  {chunks}
                </u>
              ),
            })}
          </h2>
          <p className="text-lg">{t("you.content")}</p>
        </section>
        <section className="flex flex-col space-y-2">
          <h2 className="font-heading text-2xl font-bold">
            {t.rich("us.title", {
              underline: (chunks) => (
                <u className="decoration-brand underline underline-offset-4">
                  {chunks}
                </u>
              ),
            })}
          </h2>
          <p className="text-lg">{t("us.content")}</p>
        </section>
        <section className="flex flex-col space-y-2">
          <h2 className="font-heading text-2xl font-bold">{t("how.title")}</h2>
          <p className="text-lg">{t("how.content")}</p>
          <section className="flex flex-col">
            <h3 className="font-heading text-lg font-bold">
              {t("how.digital.title")}
            </h3>
            <ul className="list-inside list-decimal px-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <li key={index} className="text-lg">
                  {/* @ts-expect-error */}
                  {t.rich(`how.digital.steps.step${index + 1}`, {
                    susdTCLink: (chunks) => (
                      <Link
                        className="text-brand hover:text-brand/90 focus:text-brand/90"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.susd.org/departments/finance/tax-credit"
                      >
                        {chunks}
                      </Link>
                    ),
                    italics: (chunks) => <i className="italic">{chunks}</i>,
                    quote: (chunks) => (
                      <q className="font-semibold">{chunks}</q>
                    ),
                    blueQuote: (chunks) => (
                      <q className="font-semibold text-blue-500">{chunks}</q>
                    ),
                    greenQuote: (chunks) => (
                      <q className="font-semibold text-green-500">{chunks}</q>
                    ),
                  })}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col">
            <h3 className="font-heading text-lg font-bold">
              {t("how.physical.title")}
            </h3>
            <ul className="list-inside list-decimal px-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className="text-lg">
                  {/* @ts-expect-error */}
                  {t.rich(`how.physical.steps.step${index + 1}`, {
                    susdTCLink: (chunks) => (
                      <Link
                        className="text-brand hover:text-brand/90 focus:text-brand/90"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.susd.org/departments/finance/tax-credit"
                      >
                        {chunks}
                      </Link>
                    ),
                    italics: (chunks) => <i className="italic">{chunks}</i>,
                    quote: (chunks) => (
                      <q className="font-semibold">{chunks}</q>
                    ),
                    blueQuote: (chunks) => (
                      <q className="font-semibold text-blue-500">{chunks}</q>
                    ),
                    greenQuote: (chunks) => (
                      <q className="font-semibold text-green-500">{chunks}</q>
                    ),
                  })}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </main>
  );
}
