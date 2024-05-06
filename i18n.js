import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import Locales from "./locales";

export default getRequestConfig(async function({ locale: Locale }) {
  if (!Locales.includes(Locale)) {
    notFound();
  };
  const Messages = await import("@/locales");
  const Translations = Messages[Locale];
  return {
    defaultTranslationValues: {
      bold: function(Chunks) {
        return (
          <b>{Chunks}</b>
        );
      },
    },
    messages: Translations,
  };
});