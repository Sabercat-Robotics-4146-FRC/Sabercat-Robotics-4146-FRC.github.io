import { cn } from "@/lib/utils";
import { Link } from "./navigation";

export default function LocaleLink({ href, children, className, locale }) {
  return (
    <Link href={href} locale={locale} className={cn("px-2 transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500", className)}>
      {children}
    </Link>
  );
};