import { forwardRef } from "react";

import * as LabelPrimitive from "@radix-ui/react-label";

import clsx from "clsx";

import { twMerge } from "tailwind-merge";

function getLabelClasses(className) {
  const labelVariants = twMerge(clsx(
    "text-sm font-medium leading-none",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-70"
  ), className);

  return labelVariants;
}

const Label = forwardRef(function Label({
  className,
  ...props
}, labelRef) {
  const labelClasses = getLabelClasses(className);

  <LabelPrimitive.Root
    ref={labelRef}
    className={labelClasses}
    {...props}
  />
});

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
