import { forwardRef } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/inputs/textfieldClasses";

import Icon from "@components/ui/Icon";
import Typography from "@components/ui/Typography";

import Box from "@components/layouts/Box";

const Textfield = forwardRef(function Textfield({
  type = "text",
  label,
  name,
  id,
  placeholder,
  value,
  icon,
  size = "base",
  rounded = false,
  success,
  error,
  className = "",
  style = {},
  isRequired,
  ...props
}, inputRef) {
  const textfieldClasses = getTextfieldClasses(
    size, rounded, !!success,
    isRequired && !!error,
    className
  );

  const hasValidType = inputTypes?.types?.[type];
  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = hasValidType && hasValidSize;

  if (!isValid) return null;

  return (
    <Box className={textfieldClasses?.textfieldWrapper}>
      {label && (
        <label
          htmlFor={id}
          className={textfieldClasses?.label}
        >
          {label}
        </label>
      )}

      <Box className={textfieldClasses?.inputWrapper}>
        <input
          ref={inputRef}
          type={type}
          role="textfield"
          aria-label="textfield"
          aria-labelledby={name}
          className={textfieldClasses?.input}
          style={style}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          {...props}
        />

        {icon && (
          <span className={textfieldClasses?.iconWrapper}>
            <Icon
              name={icon}
              className={isRequired && error && "animate-bouncy"}
            />
          </span>
        )}

        {isRequired && error && (
          <Box className={textfieldClasses?.helperTextWrapper}>
            <Typography className={textfieldClasses?.helperText}>
              {error}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
});

Textfield.displayName = "Textfield";

Textfield.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  icon: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  success: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Textfield;
