import clsx from "clsx";

import { twMerge } from "tailwind-merge";

function getTriggerClasses(className) {
  const triggerClasses = twMerge(clsx(
    "font-sans text-sm",
    "font-semibold"
  ), className);

  return triggerClasses;
}

function getContentClasses(className) {
  const contentClasses = twMerge(clsx(
    "z-50 relative",
    "min-w-[var(--radix-popover-trigger-width)]",
    "outline-none",
    "data-[side=top]:-translate-y-1",
    "data-[side=right]:translate-x-1",
    "data-[side=bottom]:translate-y-1",
    "data-[side=left]:-translate-x-1",
    "data-[state=open]:animate-in",
    "data-[state=open]:duration-300",
    "data-[state=open]:fade-in-80",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0",
    "data-[side=top]:slide-in-from-bottom-2",
    "data-[side=right]:slide-in-from-left-2",
    "data-[side=bottom]:slide-in-from-top-4",
    "data-[side=left]:slide-in-from-right-2",
  ), className);

  return contentClasses;
}

export {
  getTriggerClasses,
  getContentClasses
};
