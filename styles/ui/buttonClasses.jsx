import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getButtonVariants from "@styles/variants/buttonVariants";

function getButtonClasses(
  size, iconOnly, variant, color,
  rounded, className
) {
  const buttonVariants = getButtonVariants(size, iconOnly, variant, color);

  if (!buttonVariants) return null;

  const buttonClasses = twMerge(clsx(
    "relative",
    "inline-flex flex-0 gap-x-2.5 items-center justify-center",
    buttonVariants.size,
    "font-sans font-semibold uppercase text-center",
    "whitespace-nowrap appearance-none",
    "overflow-hidden cursor-pointer",
    buttonVariants.color,
    "outline-none border-2",
    rounded ? "rounded-full" : null,
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "transition-all duration-300 ease-in-out"
  ), className);

  return buttonClasses;
}

export default getButtonClasses;
