import clsx from "clsx";

import { twMerge } from "tailwind-merge";

function getCalenderClasses(className) {
  const calenderClasses = {
    wrapper: twMerge(clsx(
      "p-4 bg-white",
      "border border-gray-200",
      "rounded-xl shadow-lg",
    ), className),
    caption: twMerge(clsx(
      "relative",
      "flex items-center justify-center",
      "pt-4 pb-4",
    )),
    caption_label: twMerge(clsx(
      "font-sans text-base font-semibold text-center",
      "uppercase text-gray-800",
    )),
    nav: "flex items-center",
    nav_button: twMerge(clsx(
      "z-10 absolute",
      "inline-flex items-center justify-center",
      "w-8 h-8",
      "text-base leading-[17px] font-medium uppercase text-center",
      "whitespace-nowrap appearance-none",
      "overflow-hidden cursor-pointer",
      "text-gray-800 bg-transparent",
      "outline-none border border-gray-300 rounded-lg",
      "transition-all duration-300 ease-in-out"
    )),
    nav_button_previous: "left-0",
    nav_button_next: "right-0",
    table: "w-full border-collapse",
    head_row: "flex items-center justify-between",
    head_cell: twMerge(clsx(
      "flex items-center justify-center",
      "w-8 h-8",
      "font-sans text-sm font-medium",
      "text-gray-800 bg-transparent"
    )),
    row: "flex items-center justify-between mt-2",
    cell: twMerge(clsx(
      "relative",
      "p-0 m-0",
    )),
    day: twMerge(clsx(
      "inline-block",
      "w-8 h-8 m-0.5",
      "font-sans text-sm leading-[17px] font-medium uppercase text-center",
      "whitespace-nowrap appearance-none",
      "overflow-hidden cursor-pointer",
      "text-gray-800",
      "outline-none border-0 rounded-lg",
      "hover:bg-gray-100",
    )),
    day_selected: "text-white bg-black",
    day_range_middle: twMerge(clsx(
      "aria-selected:text-black/60 aria-selected:bg-black/5",
      "aria-selected:rounded-none"
    )),
    day_today: "text-white bg-black rounded-lg hover:bg-black",
    day_outside: twMerge(clsx(
      "text-gray-400/40",
      "aria-selected:text-gray-900",
      "aria-selected:bg-gray-500",
      "aria-selected:bg-opacity-10"
    )),
    day_disabled: "opacity-50 text-gray-500",
    day_hidden: "invisible",
  };

  return calenderClasses;
}

export default getCalenderClasses;
