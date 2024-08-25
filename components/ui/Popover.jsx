import { forwardRef } from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import PropTypes from "prop-types";

import {
  getTriggerClasses,
  getContentClasses,
} from "@styles/components/popoverClasses";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = forwardRef(function PopoverTrigger({
  className = "",
  style = {},
  ...props
}, triggerRef) {
  const triggerClasses = getTriggerClasses(className);

  return (
    <PopoverPrimitive.Trigger
      ref={triggerRef}
      className={triggerClasses}
      style={style}
      {...props}
    />
  )
});

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

PopoverTrigger.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

const PopoverContent = forwardRef(function PopoverContent({
  align = "start",
  side = "bottom",
  className = "",
  style = {},
  ...props
}, contentRef) {
  const contentClasses = getContentClasses(className);

  return (
    <PopoverPrimitive.Content
      ref={contentRef}
      align={align}
      side={side}
      className={contentClasses}
      style={style}
      {...props}
    />
  )
});

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

PopoverContent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

const PopoverClose = forwardRef(function PopoverClose({
  className = "",
  style = {},
  ...props
}, closeRef) {
  // const closeClasses = getCloseClasses(className);

  return (
    <PopoverPrimitive.Close
      ref={closeRef}
      // className={closeClasses}
      {...props}
    />
  )
});

PopoverClose.displayName = PopoverPrimitive.Close.displayName;

PopoverClose.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose
};
