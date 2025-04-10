"use server";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { z } from "zod";
import { env } from "~/env";
import { topicOptions } from "./global";
import { type FormMessage } from "./form";
import { render } from "@react-email/components";
import { ContactEmail } from "./emails";

const resend = new Resend(env.RESEND_API_KEY);

export async function contactFormAction(
  prevState: FormMessage | undefined,
  formData: FormData,
): Promise<FormMessage> {
  if (prevState?.success) {
    return prevState;
  }

  const formT = await getTranslations("contact.form");

  const schema = z.object({
    name: z.object({
      first: z
        .string({ message: formT("name.first.invalidError") })
        .min(2, { message: formT("name.first.invalidError") }),
      last: z
        .string({ message: formT("name.last.invalidError") })
        .min(2, { message: formT("name.last.invalidError") }),
    }),
    email: z
      .string({ message: formT("email.invalidError") })
      .email({ message: formT("email.invalidError") }),
    topic: z.enum(topicOptions),
    content: z
      .string({ message: formT("content.invalidError") })
      .min(8, { message: formT("content.invalidError") }),
  });

  const keys = [
    "firstName",
    "lastName",
    "email",
    "topic",
    "content",
  ] as const satisfies string[];
  const messages: Record<(typeof keys)[number], string> = {
    firstName: formT("name.first.emptyError"),
    lastName: formT("name.last.emptyError"),
    email: formT("email.emptyError"),
    topic: formT("unknownError"),
    content: formT("content.emptyError"),
  };
  for (const key of keys) {
    if (!formData.has(key)) {
      const message = messages[key];

      if (!message) {
        return {
          success: false,
          message: formT("unknownError"),
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
    topic: formData.get("topic")! as (typeof topicOptions)[number],
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
      message: formT("unknownError"),
    };
  }

  const t = await getTranslations("contact.email");

  const { data: emailData, error } = await resend.emails.send({
    from: "Sabercat Robotics Team #4146 <sabercat-robotics@team.sabercatrobotics.com>",
    to: [
      `${data.name.first} ${data.name.last} <${data.email}>`,
      "team@sabercatrobotics.com",
    ],
    subject: t("subject"),
    react: await ContactEmail({
      ...data,
      name: `${data.name.first} ${data.name.last}`,
    }),
    text: await render(
      await ContactEmail({
        ...data,
        name: `${data.name.first} ${data.name.last}`,
      }),
      { plainText: true },
    ),
  });

  if (emailData) {
    return {
      success: true,
      message: formT("success"),
    };
  }

  if (error) {
    console.warn(error);
  }

  return {
    success: false,
    message: formT("unknownError"),
  };
}
