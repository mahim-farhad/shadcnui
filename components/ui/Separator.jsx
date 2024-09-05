import { forwardRef } from "react";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

import clsx from "clsx";

const Separator = forwardRef(function Separator({
  orientation = "horizontal",
  decorative = true,
  className = "",
  ...props
}, separatorRef) {
  return (
    <SeparatorPrimitive.Root
      ref={separatorRef}
      orientation={orientation}
      decorative={decorative}
      className={twMerge(clsx(
        "shrink-0",
        orientation === "horizontal"
          ? "h-px w-full"
          : "h-full w-px",
        "bg-black/10 dark:bg-gray-300",
      ), className)}
      {...props}
    />
  )
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

Separator.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Separator;
