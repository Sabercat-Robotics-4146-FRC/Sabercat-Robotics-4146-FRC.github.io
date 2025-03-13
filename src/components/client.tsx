"use client";
import { useTranslations } from "next-intl";
import { CardDescription } from "./ui/card";

export function OngoingCompetition({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const t = useTranslations("home.competitions");

  const now = Date.now();

  if (now > startDate.getTime() && now < endDate.getTime()) {
    return (
      <p className="text-base font-medium text-slate-700 italic">
        {t("ongoing")}
      </p>
    );
  }
}
