import clsx from "clsx";

import { twMerge } from "tailwind-merge";

const classNames = (...classNames) => {
  return twMerge(clsx(classNames)) || undefined;
}

export { classNames };
