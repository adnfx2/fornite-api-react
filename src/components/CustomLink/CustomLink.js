import React from "react";

const CustomLink = ({
  classes,
  href,
  title,
  placeholder,
  target,
  rel,
  external
}) => (
  <a
    className={classes}
    href={href}
    title={title}
    target={target || (external && "_blank")}
    rel={target || (external && "noopener noreferrer")}
  >
    {placeholder}
  </a>
);

export default CustomLink;
