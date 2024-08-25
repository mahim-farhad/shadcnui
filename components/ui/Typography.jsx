import PropTypes from "prop-types";

import { typographyTypes } from "@utils/types";

import getTypographyClasses from "@styles/ui/typographyClasses";

function Typography({
  type = "p",
  gradient = false,
  className = "",
  style = {},
  ...props
}) {
  const Component = type;

  const typographyClasses = getTypographyClasses(type, gradient, className);

  const hasValidType = typographyTypes?.types?.[type];

  const isValid = hasValidType;

  if (!isValid) return null;

  return (
    <Component
      className={typographyClasses}
      style={style}
      {...props}
    />
  );
}

Typography.displayName = "Typography";

Typography.propTypes = {
  type: PropTypes.oneOf(Object.keys(typographyTypes?.types)),
  gradient: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Typography;
