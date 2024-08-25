import { forwardRef } from "react";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Box = forwardRef(function Box({
  uniqueKey,
  className = "",
  style = {},
  children,
  ...props
}, boxRef) {
  const boxClasses = twMerge(className) || undefined;

  return (
    <div
      ref={boxRef}
      key={uniqueKey}
      className={boxClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

Box.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Box;
