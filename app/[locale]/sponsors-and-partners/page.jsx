import Image from "next/image";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/navigation";
import { useTranslations } from "next-intl";

function Sponsor({ title, src, href }) {
  const Translate = useTranslations("SponsorsAndPartners");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {
            (function () {
              if (src) {
                return <Image src={`/assets/img/${src}`} alt={`${title} logo`} width={40} height={40} sizes="5rem" className="inline" />;
              };
            })()
          }
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          (function () {
            if (href) {
              return <Link className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500" href={href}>
                {Translate("Visit")}
              </Link>;
            };
          })()
        }
      </CardContent>
    </Card>
  );
};
export default function Page() {
  const PageHeaderTranslate = useTranslations("Website");
  const Translate = useTranslations("SponsorsAndPartners");

  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title={PageHeaderTranslate("SponsorsAndPartners")} description={PageHeaderTranslate("CardDescriptions.SponsorsAndPartners")} src="/assets/img/sponsors-and-partners.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900 mb-4">
          <h2 className="text-3xl">{Translate("Header")}</h2>
          <p>{Translate("Description")}</p>
        </header>
        <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Sponsor title="Axon" src="axon.png" href="https://axon.com/" />
          <Sponsor title="Rowland Family Fund" />
          <Sponsor title="Raytheon" src="raytheon.png" href="https://rtx.com/" />
          <Sponsor title="SOAR Foundation" src="soar-foundation.png" href="https://soar-foundation.net/" />
          <Sponsor title="Scottsdale Unified School District" src="susd.png" href="https://susd.org/" />
          <Sponsor title="SUSD Foundation" src="susd-foundation.png" href="https://susdfoundation.org/" />
          <Sponsor title="Vertex" src="vertex.png" href="https://vertex.com/" />
          <Sponsor title="The Raboin Fox Family" />
          <Sponsor title="The Rowland Family" />
          <Sponsor title="The Farley Family" />
          <Sponsor title="Robotics Families and Community Members" />
        </main>
      </main>
    </main>
  );
};