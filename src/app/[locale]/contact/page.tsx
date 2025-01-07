import { getTranslations, setRequestLocale } from "next-intl/server";
import { createTransport } from "nodemailer";
import { FormField } from "~/components/form";
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
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { env } from "~/env";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  return await metadata({ params, namespace: "contact", path: "/contact" });
}

const topicOptions: string[] = [
  "mentorship",
  "sponsorship",
  "taxCredit",
  "programs",
  "innovationCenter",
  "other",
];

async function contactFormAction(formData: FormData): Promise<> {
  "use server";

  const name = formData.getAll("name").join(" ");
  const email = formData.get("email");
  const topic = formData.get("topic");
  const content = formData.get("content");

  const transporter = createTransport({
    host: "mail.google.com",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "team@sabercatrobotics.com",
      clientId: env.GMAIL_CLIENT_ID,
      clientSecret: env.GMAIL_CLIENT_SECRET,
      refreshToken: env.GMAIL_REFRESH_TOKEN,
      accessToken: env.GMAIL_ACCESS_TOKEN,
    },  
  });

  try {
    await transporter.verify();
  } catch (e) {
    console.warn(e);
  }

  try {
    await transporter.sendMail({
      from: `${name} <team@sabercatrobotics.com>`,
      to: "Sabercat Robotics Team team@sabercatrobotics.com",
      subject: `Contact Form Submission from ${name}: "${topic}"`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nContent: ${content}`,
    });
  } catch (e) {
    console.warn(e);
  };
};

export default async function ContactPage({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <main className="flex flex-col gap-2 p-4">
      <PageHeader
        title={t("title")}
        description={t("description")}
        src="/assets/img/15.jpg"
      />
      <main className="flex flex-col gap-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">{t("form.title")}</CardTitle>
            <CardDescription>{t("form.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-4"
              action={contactFormAction}
            >
              <section className="flex flex-col gap-4 md:flex-row">
                <FormField
                  className="md:basis-1/2"
                  label={t("form.name.first.label")}
                  description={t("form.name.first.description")}
                  component={
                    <Input
                      name="name"
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
                      name="name"
                      placeholder={t("form.name.last.placeholder")}
                      type="text"
                      inputMode="text"
                    />
                  }
                />
              </section>
              <section className="flex flex-col gap-4 md:flex-row">
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
                    />
                  }
                />
                <FormField
                  className="md:basis-1/2"
                  label={t("form.topic.label")}
                  description={t("form.topic.description")}
                  component={
                    <Select name="topic" defaultValue={topicOptions[0]}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        defaultChecked
                        defaultValue={topicOptions[0]}
                      >
                        {topicOptions.map(function (topicOption, i) {
                          const key = `form.topic.${topicOption.toString()}`;

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
                    </Select>
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
              <Button className="w-max" type="submit">
                {t("form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </main>
  );
}
