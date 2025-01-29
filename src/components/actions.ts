"use server";
import { getTranslations } from "next-intl/server";
import { z } from "zod";
import { createTransport } from "nodemailer";
import { env } from "~/env";
import { topicOptions } from "./global";
import { type FormMessage } from "./form";

export async function contactFormAction(
  prevState: FormMessage | undefined,
  formData: FormData,
): Promise<FormMessage> {
  if (prevState?.success) {
    return prevState;
  }

  const t = await getTranslations("contact.form");

  const schema = z.object({
    name: z.object({
      first: z
        .string({ message: t("name.first.invalidError") })
        .min(2, { message: t("name.first.invalidError") }),
      last: z
        .string({ message: t("name.last.invalidError") })
        .min(2, { message: t("name.last.invalidError") }),
    }),
    email: z
      .string({ message: t("email.invalidError") })
      .email({ message: t("email.invalidError") }),
    topic: z.enum(topicOptions),
    content: z
      .string({ message: t("content.invalidError") })
      .min(8, { message: t("content.invalidError") }),
  });

  const keys = ["firstName", "lastName", "email", "topic", "content"];
  const messages: Record<string, string> = {
    firstName: t("name.first.emptyError"),
    lastName: t("name.last.emptyError"),
    email: t("email.emptyError"),
    topic: t("unknownError"),
    content: t("content.emptyError"),
  };
  for (const key of keys) {
    console.log(key, formData.has(key), formData.get(key));
    if (!formData.has(key)) {
      const message = messages[key];

      if (!message) {
        return {
          success: false,
          message: t("unknownError"),
        };
      }

      return {
        success: false,
        message,
      };
    }
  }

  const data = {
    name: {
      first: formData.get("firstName")! as string,
      last: formData.get("lastName")! as string,
    },
    email: formData.get("email")! as string,
    topic: formData.get("topic")! as string,
    content: formData.get("content")! as string,
  };

  try {
    schema.parse(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return {
        success: false,
        message: e.issues[0]?.message ?? e.message,
      };
    }

    console.warn(e);

    return {
      success: false,
      message: t("unknownError"),
    };
  }

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

    return {
      success: false,
      message: t("unknownError"),
    };
  }

  try {
    await transporter.sendMail({
      from: `${data.name.first} ${data.name.last} <team@sabercatrobotics.com>`,
      to: "Sabercat Robotics Team <team@sabercatrobotics.com>",
      subject: `Contact Form Submission from ${data.name.first}: "${data.topic}"`,
      text: `Name: ${data.name.first} ${data.name.last}\nEmail: ${data.email}\nTopic: ${data.topic}\nContent: ${data.content}`,
    });

    return {
      success: true,
      message: t("success"),
    };
  } catch (e) {
    console.warn(e);

    return {
      success: false,
      message: t("unknownError"),
    };
  }
}
