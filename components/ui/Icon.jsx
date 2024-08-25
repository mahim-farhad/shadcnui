import PropTypes from "prop-types";

import { icons } from "lucide-react";

import { iconTypes } from "@utils/types";

import getIconClasses from "@styles/ui/iconClasses";

const Icon = ({
  name = "",
  size = "base",
  className = "",
  style = {},
  ...props
}) => {
  const iconClasses = getIconClasses(size, className);

  const Icon = icons?.[name];

  const hasValidSize = iconTypes?.sizes?.[size];

  const isValid = Icon && hasValidSize;

  if (!isValid) return null;

  return (
    <Icon
      className={iconClasses}
      style={style}
      {...props}
    />
  );
}

Icon.displayName = "Icon";

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(iconTypes?.sizes)),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
