"use client";
import {
  cloneElement,
  createContext,
  useActionState,
  useContext,
  useId,
  useState,
} from "react";
import { Label } from "./ui/label";
import { cn } from "~/lib/utils";
import { Select } from "./ui/select";

export type FormMessage = {
  message: string;
  success: boolean;
};

const actionHashContext = createContext<string>("");

export function Form({
  action: actionProp,
  pendingText,
  submitButton,
  children,
  ...props
}: Omit<React.FormHTMLAttributes<HTMLFormElement>, "action"> & {
  action: (
    prevState: FormMessage | undefined,
    formData: FormData,
  ) => FormMessage | Promise<FormMessage>;
  pendingText: Omit<React.ReactHTMLElement<HTMLParagraphElement>, "ref">;
  submitButton: Omit<React.ReactHTMLElement<HTMLButtonElement>, "ref">;
}) {
  const [actionHash, setActionHash] = useState(Math.random().toString(36));

  async function action(
    ...params: Parameters<typeof actionProp>
  ): Promise<ReturnType<typeof actionProp>> {
    setActionHash(Math.random().toString(36));
    return await actionProp(...params);
  }

  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} {...props}>
      <actionHashContext.Provider value={actionHash}>
        {children}
      </actionHashContext.Provider>
      {state &&
        cloneElement(pendingText, {
          "aria-live": "polite",
          children: pending ? pendingText.props.children : state.message,
          role: "status",
          className: cn(
            pendingText.props.className,
            !state.success && "text-red-500",
            state.success && "text-green-500",
            pending && "text-slate-500",
          ),
        })}
      {cloneElement(submitButton, { disabled: pending, type: "submit" })}
    </form>
  );
}

export function FormField<
  T extends Omit<React.ReactHTMLElement<HTMLElement>, "ref">,
>({
  label,
  labelProps,
  description,
  descriptionProps: descriptionPropsProp,
  component,
  className,
}: Readonly<{
  label: string;
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  description?: string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  component: T;
  className?: string;
}>) {
  const componentId = useId();
  const descriptionId = useId();

  const { className: descriptionClassName, ...descriptionProps } =
    descriptionPropsProp ?? {};

  return (
    <section className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={componentId} {...labelProps}>
        {label}
      </Label>
      {cloneElement(component, {
        id: componentId,
        "aria-describedby": descriptionId,
      })}
      {description && (
        <p
          className={cn(
            "text-[0.8rem] text-slate-500 dark:text-slate-400",
            descriptionClassName,
          )}
          {...descriptionProps}
        >
          {description}
        </p>
      )}
    </section>
  );
}

export function FormSelect({
  defaultValue,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Select>,
  "value" | "onValueChange"
>) {
  const actionHash = useContext(actionHashContext);
  const [value, setValue] = useState(`${defaultValue}_${actionHash}`);

  if (value.replace(`_${actionHash}`, "") === "") {
    setValue(`${defaultValue}_${actionHash}`);
  }

  return (
    <Select
      value={value.replace(`_${actionHash}`, "")}
      onValueChange={function (value) {
        setValue(`${value}_${actionHash}`);
      }}
      {...props}
    />
  );
}
