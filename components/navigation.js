import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Locales from "@/locales";

export const { Link } = createSharedPathnamesNavigation({
  locales: Locales,
  localePrefix: "as-needed",
});