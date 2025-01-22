import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { PageHeader } from "~/components/global";
import metadata from "~/components/metadata";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({ params, namespace: "awards", path: "/about/awards" });
}

function BannerAward({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <section className="relative mb-16 flex w-40 flex-col flex-wrap bg-[#0F4BCB] p-3">
      <Image
        src="/assets/svg/first.svg"
        alt="FIRST Robotics Logo"
        width={100}
        height={60}
        className="mx-auto"
      />
      <h3 className="mt-auto text-center font-semibold">{title}</h3>
      <p className="mt-auto text-center">{description}</p>
      <svg
        className="absolute left-0 top-full"
        width="10rem"
        viewBox="0 0 60 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="#0F4BCB"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.271434}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity={1}
        >
          <path d="M 0.01412096,0 V 20 L 29.787275,9.6253601 60,19.942362 V 0 H 0 v 0 0" />
        </g>
      </svg>
    </section>
  );
}

export default async function AwardsPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("awards");

  const banners: string[] = [
    "az2012Finalists",
    "az2012Rookie",
    "az2015WoodieFlowers",
    "az2015Regional",
    "az2020Chairman",
  ];

  // Sorted by earliest to latest, format: competition = # of awards
  const yearly: Record<string, number>[] = [
    // 2012
    {
      az: 2,
    },
    // 2013
    {
      azWest: 3,
    },
    // 2014
    {
      az: 1,
      lv: 1,
    },
    // 2015
    {
      azWest: 2,
      azEast: 1,
    },
    // 2016
    {
      azWest: 3,
    },
    // 2017
    {
      azNorth: 2,
    },
    // 2018
    {
      azWest: 3,
    },
    // 2019
    {
      azWest: 3,
      azNorth: 1,
    },
    // 2020
    {
      azWest: 1,
    },
    // 2021
    {
      neonGroup: 1,
    },
    // 2022
    {
      azValley: 1,
    },
    // 2023
    {
      azEast: 1,
      azWest: 1,
    },
  ];

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/awards.jpg"
      />
      <main className="flex flex-col space-y-4 px-4 py-2">
        <section className="flex flex-col space-y-6">
          <header className="flex flex-col space-y-2">
            <h2 className="font-heading text-2xl font-bold">
              {t("banners.title")}
            </h2>
            <p className="text-lg">{t("banners.description")}</p>
          </header>
          <main className="flex flex-wrap text-slate-100 [&>*:not(:last-child)]:mr-6">
            {banners.map(function (key, i) {
              const baseKey = `banners.${key}`;
              return (
                <BannerAward
                  title={t(baseKey + ".title")}
                  description={t(baseKey + ".description")}
                  key={`${key}_${i.toString()}`}
                />
              );
            })}
          </main>
        </section>
        <section className="flex flex-col space-y-6">
          <header className="flex flex-col space-y-2">
            <h2 className="font-heading text-2xl font-bold">
              {t("yearly.title")}
            </h2>
            <p className="text-lg">{t("yearly.description")}</p>
          </header>
          <main className="flex flex-col space-y-3">
            {yearly
              .map(function (values, i) {
                const year = 2012 + i;
                const baseKey = `yearly.${year.toString()}`;
                return (
                  <section
                    className="flex flex-col space-y-2"
                    key={`${year.toString()}_${i.toString()}`}
                  >
                    <header className="text-slate-950">
                      <h3 className="font-heading text-2xl font-semibold">
                        {year.toString()}
                      </h3>
                    </header>
                    <main className="marker:text-slate-900">
                      {Object.keys(values).map(function (key, i) {
                        const awards = values[key]!;
                        key = `${baseKey}.${key}`;
                        return (
                          <ul
                            className="list-disc"
                            key={`${key}_${i.toString()}`}
                          >
                            <p className="list-none font-semibold">
                              {t(`${key}.title`)}
                            </p>
                            {Array.from({ length: awards }).map((_, i) => (
                              <li
                                className="mx-8 text-slate-900"
                                key={`award${(i + 1).toString()}`}
                              >
                                {t(`${key}.award${i + 1}`)}
                              </li>
                            ))}
                          </ul>
                        );
                      })}
                    </main>
                  </section>
                );
              })
              .reverse()}
          </main>
        </section>
      </main>
    </main>
  );
}
