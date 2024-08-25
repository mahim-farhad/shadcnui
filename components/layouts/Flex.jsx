import { forwardRef } from "react";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Flex = forwardRef(function Flex({
  uniqueKey,
  className = "",
  style = {},
  children,
  ...props
}, flexRef) {
  const flexClasses = twMerge(
    "flex",
    "flex-wrap",
    className
  );

  return (
    <div
      ref={flexRef}
      key={uniqueKey}
      className={flexClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

Flex.displayName = "Flex";

Flex.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Flex;
