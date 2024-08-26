import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTextfieldVariants from
  "@styles/variants/textfieldVariants";

function getTextfieldClasses(size, rounded, isValid, isInvalid, className) {
  const textfieldVariants = getTextfieldVariants(size);

  if (!textfieldVariants) return null;

  const textfieldClasses = {
    textfieldWrapper: "",
    label: twMerge(clsx(
      "block",
      "py-1 px-4",
      "font-sans text-sm leading-[16px] font-medium uppercase",
      "text-gray-400 dark:text-gray-400",
      "transition-all duration-150 ease-in-out"
    )),
    inputWrapper: twMerge(clsx(
      "relative",
      "flex flex-nowrap items-center",
      rounded ? "rounded-full" : "rounded-lg",
    )),
    input: twMerge(clsx(
      "z-10 relative",
      "w-full",
      textfieldVariants?.size?.input,
      "font-sans text-base font-normal",
      "whitespace-nowrap appearance-none cursor-pointer",
      "text-gray-400 dark:text-gray-400",
      "bg-white dark:bg-white",
      "outline-none border",
      "focus:border-primary focus:dark:border-primary",
      isInvalid
        ? "border-error dark:border-error"
        : "border-gray-200 dark:border-gray-200",
      rounded ? "rounded-full" : "rounded-lg",
      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "transition-all duration-150 ease-in-out"
    ), className),
    iconWrapper: twMerge(clsx(
      "z-10 absolute right-0",
      "flex items-center justify-center",
      textfieldVariants?.size?.iconWrapper,
      "font-sans text-sm font-medium",
      isInvalid
        ? "text-error dark:text-error"
        : "text-gray-400 dark:text-gray-400",
      "transition-all duration-150 ease-in-out"
    )),
    helperTextWrapper: "z-10 absolute -bottom-1/2",
    helperText: twMerge(clsx(
      "py-1 px-4",
      "text-xs font-semibold uppercase",
      isInvalid
        ? "text-error dark:text-error"
        : "text-gray-400 dark:text-gray-300",
    )),
  };

  return textfieldClasses;
}

export default getTextfieldClasses;
