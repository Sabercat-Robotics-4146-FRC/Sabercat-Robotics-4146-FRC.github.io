import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: [
    "en-US",
    // "es-MX",
    // "fr-CA",
    // "ja-JP",
    // "zh-CN",
    // "zh-TW",
  ],
  defaultLocale: "en-US",
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);