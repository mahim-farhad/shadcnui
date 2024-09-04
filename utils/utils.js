import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export const classNames = (...classNames) => {
  return twMerge(clsx(classNames)) || undefined;
}

export async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const convertToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach(
    key => formData.append(
      key, data[key]
    )
  );

  return formData;
};
