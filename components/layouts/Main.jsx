import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Main({
  className = "",
  style = {},
  children,
  ...props
}) {
  const mainClasses = twMerge(
    "h-full",
    "min-h-screen",
    "bg-background-light",
    className
  );

  return (
    <main
      className={mainClasses}
      style={style}
      {...props}
    >
      {children}
    </main>
  );
}

Main.displayName = "Main";

Main.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Main;
