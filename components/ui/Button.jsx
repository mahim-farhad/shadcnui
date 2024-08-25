import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

import PropTypes from "prop-types";

import { buttonTypes } from "@utils/types";

import getButtonClasses from "@styles/ui/buttonClasses";

const Button = forwardRef(function Button({
  type = "button",
  iconOnly = false,
  size = "base",
  variant = "filled",
  color = "primary",
  rounded = false,
  className = "",
  style = {},
  asChild = false,
  ...props
}, buttonRef) {
  const Component = asChild ? Slot : "button";

  const buttonClasses = getButtonClasses(
    size, iconOnly, variant, color,
    rounded, className
  );

  const hasValidType = buttonTypes?.types?.[type];
  const hasValidSize = buttonTypes?.sizes?.[size];
  const hasValidVariant =
    buttonTypes?.variants?.[variant] &&
    buttonTypes?.colors?.[color];

  const isValid =
    hasValidType && hasValidSize && hasValidVariant;

  if (!isValid) return null;

  return (
    <Component
      ref={buttonRef}
      type={type}
      className={buttonClasses}
      style={style}
      {...props}
    />
  );
});

Button.displayName = "Button";

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(buttonTypes?.types)),
  iconOnly: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonTypes?.sizes)),
  variant: PropTypes.oneOf(Object.keys(buttonTypes?.variants)),
  color: PropTypes.oneOf(Object.keys(buttonTypes?.colors)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  asChild: PropTypes.bool
};

export default Button;
