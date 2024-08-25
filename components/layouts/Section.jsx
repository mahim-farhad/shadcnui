import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Section({
  className = "",
  style = {},
  children,
  ...props
}) {
  const sectionClasses = twMerge(
    "relative",
    "py-4 sm:py-8",
    className
  );

  return (
    <section
      className={sectionClasses}
      style={style}
      {...props}
    >
      {children}
    </section>
  );
}

Section.displayName = "Section";

Section.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Section;
