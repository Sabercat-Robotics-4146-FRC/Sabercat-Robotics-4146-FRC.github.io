"use client";
import { cloneElement, useActionState, useId } from "react";
import { Label } from "./ui/label";
import { cn } from "~/lib/utils";

export function Form({
  action,
  initialState,
  children,
  ...props
}: React.PropsWithoutRef<HTMLFormElement> & {
  action: (state: typeof initialState) => Promise<typeof initialState>;
  initialState: Record<string, string>;
}) {
  const [state, formAction] = useActionState(action, initialState);

  return (
    <form action={formAction} {...props}>
      {children}
    </form>
  );
};

export function FormField({
  label,
  labelProps,
  description,
  descriptionProps,
  component,
  className,
}: Readonly<{
  label: string;
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  description?: string;
  descriptionProps?: Partial<React.PropsWithoutRef<HTMLParagraphElement>>;
  component: React.ReactElement<any & { id?: string }>;
  className?: string;
}>) {
  const componentId = useId();
  const descriptionId = useId();

  return (
    <section className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={componentId} {...labelProps}>
        {label}
      </Label>
      {cloneElement(component, { id: componentId, "aria-describedby": description ? descriptionId : undefined })}
      {description && (
        <p
          className={cn(
            "text-[0.8rem] text-slate-500 dark:text-slate-400",
            descriptionProps?.className,
          )}
        >
          {description}
        </p>
      )}
    </section>
  );
}
