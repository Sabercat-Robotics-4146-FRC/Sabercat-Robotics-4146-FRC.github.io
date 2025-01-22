import { type AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async function ({ requestLocale }) {
  let locale = await requestLocale;

  if (
    !locale ||
    !routing.locales.includes(locale as typeof routing.defaultLocale)
  ) {
    locale = routing.defaultLocale;
  }

  const jsonFile = (await import(`../../locales/${locale}.json`)) as {
    default: AbstractIntlMessages;
  };
  const messages = jsonFile.default;

  return {
    locale,
    messages,
  };
});
