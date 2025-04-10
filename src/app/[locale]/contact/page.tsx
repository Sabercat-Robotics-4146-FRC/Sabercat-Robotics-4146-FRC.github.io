import { MailIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { contactFormAction } from "~/components/actions";
import { Form, FormField, FormSelect } from "~/components/form";
import { PageHeader, topicOptions, Link } from "~/components/global";
import metadata from "~/components/metadata";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({ params, namespace: "contact", path: "/contact" });
}

export default async function ContactPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <main className="flex flex-col space-y-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/15.jpg"
      />
      <main className="flex flex-col space-y-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">{t("form.title")}</CardTitle>
            <CardDescription>{t("form.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            {t("form.unavailable")}
            {/* <Form
              className="flex flex-col space-y-4"
              action={contactFormAction}
              submitButton={
                <Button className="w-max" type="submit">
                  {t("form.submit")}
                </Button>
              }
              pendingText={
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t("form.pending")}
                </p>
              }
            >
              <section className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <FormField
                  className="md:basis-1/2"
                  label={t("form.name.first.label")}
                  description={t("form.name.first.description")}
                  component={
                    <Input
                      name="firstName"
                      placeholder={t("form.name.first.placeholder")}
                      type="text"
                      inputMode="text"
                    />
                  }
                />
                <FormField
                  className="md:basis-1/2"
                  label={t("form.name.last.label")}
                  description={t("form.name.last.description")}
                  component={
                    <Input
                      name="lastName"
                      placeholder={t("form.name.last.placeholder")}
                      type="text"
                      inputMode="text"
                    />
                  }
                />
              </section>
              <section className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <FormField
                  className="md:basis-1/2"
                  label={t("form.email.label")}
                  description={t("form.email.description")}
                  component={
                    <Input
                      name="email"
                      placeholder={t("form.email.placeholder")}
                      type="email"
                      inputMode="email"
                      autoComplete="work email"
                    />
                  }
                />
                <FormField
                  className="md:basis-1/2"
                  label={t("form.topic.label")}
                  description={t("form.topic.description")}
                  component={
                    <FormSelect name="topic" defaultValue={topicOptions[0]}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        defaultChecked
                        defaultValue={topicOptions[0]}
                      >
                        {topicOptions.map(function (topicOption, i) {
                          const key = `form.topic.${topicOption}`;

                          return (
                            <SelectItem
                              key={`${topicOption}_${i.toString()}`}
                              value={topicOption}
                            >
                              {t(key)}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </FormSelect>
                  }
                />
              </section>
              <FormField
                label={t("form.content.label")}
                description={t("form.content.description")}
                component={
                  <Textarea
                    name="content"
                    placeholder={t("form.content.placeholder")}
                    inputMode="text"
                  />
                }
              />
            </Form> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">{t("other.title")}</CardTitle>
            <CardDescription>{t("other.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="gap-1 p-0" variant="link" asChild>
              <Link
                href={`mailto:${t("email")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon className="size-5" role="presentation" />
                {t("email")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </main>
  );
}
