import {
  createContext, useContext,
  forwardRef, useId
} from "react";

import { useFormContext, Controller } from "react-hook-form";

import clsx from "clsx";

import Icon from "@components/ui/Icon";
import Typography from "@components/ui/Typography";

import Box from "@components/layouts/Box";

const FormFieldContext = createContext({});

const FormItemContext = createContext({});

function useFormField() {
  const fieldContext = useContext(FormFieldContext);

  const itemContext = useContext(FormItemContext);

  const { getFieldState, formState } = useFormContext();

  const fieldState =
    getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};

function FormField(props) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const FormItem = forwardRef(function FormItem({ ...props }, ref) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={clsx(
          "relative",
          "flex",
          "items-center",
        )}
        {...props}
      />
    </FormItemContext.Provider>
  )
});

FormItem.displayName = "FormItem";

const FormLabel = forwardRef(function FormLabel({ ...props }, ref) {
  const { formItemId } = useFormField();

  return (
    <label
      ref={ref}
      htmlFor={formItemId}
      className={clsx(
        "absolute top-0",
        "block",
        "py-1 px-4",
        "font-sans text-sm leading-[16px] font-medium uppercase",
        "text-gray-500 dark:text-gray-500",
        "transition-all duration-150 ease-in-out"
      )}
      {...props}
    />
  )
});

FormLabel.displayName = "FormLabel";

const FormControl = forwardRef(function FormControl({ ...props }, ref) {
  const {
    formItemId, formDescriptionId,
    formMessageId, error
  } = useFormField();

  return (
    <input
      ref={ref}
      role="textfield"
      aria-label="textfield"
      // aria-labelledby={name}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      id={formItemId}
      className={clsx(
        "z-10 relative",
        "w-full h-12",
        "pl-[calc(1rem-2px)] pr-[calc(3rem-2px)] my-6",
        // textfieldVariants?.size?.input,
        "font-sans text-base font-normal",
        "whitespace-nowrap appearance-none cursor-pointer",
        "text-gray-400 dark:text-gray-400",
        "bg-white dark:bg-white",
        "outline-none border",
        "focus:border-primary focus:dark:border-primary",
        error
          ? "border-error dark:border-error"
          : "border-gray-200 dark:border-gray-200",
        "rounded-lg",
        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "transition-all duration-150 ease-in-out"
      )}
      {...props}
    />
  )
});

FormControl.displayName = "FormControl";

const FormIcon = forwardRef(function FormIcon({ name }, ref) {
  const { error } = useFormField();

  return (
    <span
      ref={ref}
      className={clsx(
        "z-10 absolute right-0",
        "flex items-center justify-center",
        "w-12 h-12",
        // textfieldVariants?.size?.iconWrapper,
        "font-sans text-sm font-medium",
        error
          ? "text-error dark:text-error"
          : "text-gray-400 dark:text-gray-400",
        "transition-all duration-150 ease-in-out"
      )}
    >
      <Icon
        name={name}
        className={error && "animate-bouncy"}
      />
    </span>
  );
});

FormIcon.displayName = "FormIcon";

const FormDescription = forwardRef(function FormDescription({ ...props }, ref) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={clsx(
        "text-sm",
        "text-foreground-light"
      )}
      {...props}
    />
  );
});

FormDescription.displayName = "FormDescription";

const FormMessage = forwardRef(function FormMessage({ ...props }, ref) {
  const { formMessageId, error, } = useFormField();

  const body = error ? String(error?.message) : undefined;

  if (!body) return null;

  return (
    <Box className={clsx("absolute bottom-0")}>
      <Typography
        ref={ref}
        id={formMessageId}
        className={clsx(
          "py-1 px-4",
          "text-xs font-semibold uppercase",
          error
            ? "text-error dark:text-error"
            : "text-gray-400 dark:text-gray-300",
        )}
        {...props}
      >
        {body}
      </Typography>
    </Box>
  )
});

FormMessage.displayName = "FormMessage";

export {
  FormField, FormItem, FormLabel,
  FormControl, FormIcon,
  FormDescription, FormMessage,
};
