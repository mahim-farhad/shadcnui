import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTypographyVariants from "@styles/variants/typographyVariants";

function getTypographyClasses(type, gradient, className) {
  const typographyVariants = getTypographyVariants(type);

  if (!typographyVariants) return null;

  const typographyClasses = twMerge(clsx(
    typographyVariants.type,
    type !== "blockquote" && gradient && [
      "text-transparent",
      "bg-clip-text",
    ]
  ), className);

  return typographyClasses;
}

export default getTypographyClasses;
