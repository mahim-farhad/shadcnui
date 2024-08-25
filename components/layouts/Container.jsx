import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Container({
  className = "",
  style = {},
  children,
  ...props
}) {
  const containerClasses = twMerge(
    "container",
    "px-4 sm:px-8",
    "mx-auto",
    className
  );

  return (
    <div
      className={containerClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Container;
