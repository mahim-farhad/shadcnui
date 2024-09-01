import clsx from "clsx";

import { twMerge } from "tailwind-merge";

const classNames = (...classNames) => {
  return twMerge(clsx(classNames)) || undefined;
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { classNames, delay };
