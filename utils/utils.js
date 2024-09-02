import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export const classNames = (...classNames) => {
  return twMerge(clsx(classNames)) || undefined;
}

export async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
