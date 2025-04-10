import { getImageProps } from "next/image";
import { type ImgProps } from "next/dist/shared/lib/get-img-props";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { z } from "zod";
import { topicOptions } from "./global";

function prefixImageSrcs(props: ImgProps): ImgProps {
  props.src = `https://sabercatrobotics.com${props.src}`;
  props.srcSet = props.srcSet
    ?.split(", ")
    .map((srcSet) => {
      return `https://sabercatrobotics.com${srcSet}`;
    })
    .join(", ");
  return props;
}

export async function ContactEmail({
  name,
  topic,
  content,
}: {
  name: `${string} ${string}`;
  topic: (typeof topicOptions)[number];
  content: string;
}) {
  const locale = await getLocale();
  const noNamespaceT = await getTranslations();
  const formT = await getTranslations("contact.form");
  const t = await getTranslations("contact.email");

  const nextImg = prefixImageSrcs(
    getImageProps({
      src: "https://sabercatrobotics.com/assets/img/head-raw-large-white.png",
      alt: noNamespaceT("alt"),
      width: 4620,
      height: 3570,
      sizes: "10vw",
    }).props,
  );

  return (
    <Html lang={locale}>
      <Head>
        <title>{t("subject")}</title>
      </Head>
      <Tailwind
        config={{ theme: { extend: { colors: { brand: "#f4b912" } } } }}
      >
        <Body className="m-auto p-4 font-sans text-lg text-slate-50">
          <Preview>{t("preview")}</Preview>
          <Container className="bg-brand rounded-3xl border-2 border-solid border-slate-100 p-4 shadow-lg">
            <Section className="mb-6">
              <Img {...nextImg} className="h-96 w-auto" />
            </Section>
            <Heading as="h1" className="mb-3 text-3xl font-bold">
              {t("subject")}
            </Heading>
            <Text>{t("body", { name })}</Text>
            <Section className="text-sm">
              <Text className="my-0 text-base font-semibold">{t("info")}</Text>
              <Text className="m-0 pl-2">
                {t("input", {
                  field: formT("name.first.label"),
                  value: name.split(" ")[0]!,
                })}
              </Text>
              <Text className="m-0 pl-2">
                {t("input", {
                  field: formT("name.last.label"),
                  value: name.split(" ")[0]!,
                })}
              </Text>
              <Text className="m-0 pl-2">
                {t("input", {
                  field: formT("topic.label"),
                  value: formT(`topic.${topic}`),
                })}
              </Text>
              <Text className="m-0 pl-2">
                {t("input", {
                  field: formT("content.label"),
                  value: content,
                })}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
