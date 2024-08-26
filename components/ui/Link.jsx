"use client";

import NextLink from "next/link";

import { useRouter } from "next/navigation";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Link({
  uniqueKey,
  href,
  title,
  transition = false,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const router = useRouter();

  const linkClasses = twMerge("block", className);

  if (!href) return null;

  function handleClick(event) {
    event.preventDefault();

    if (!transition && !document.startViewTransition) {
      return null;
    } else {
      document.startViewTransition(() => {
        router.push(href);
      });
    }
  }

  return (
    <NextLink
      key={uniqueKey}
      href={href}
      title={title}
      // target="_blank"
      // rel="noreferrer"
      className={linkClasses}
      style={style}
      onClick={transition ? handleClick : undefined}
      {...rest}
    >
      {children}
    </NextLink>
  );
}

Link.displayName = "Link";

Link.propTypes = {
  uniqueKey: PropTypes.any,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  transition: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Link;
