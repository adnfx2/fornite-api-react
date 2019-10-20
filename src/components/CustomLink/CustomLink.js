import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_TARGET = "_blank";
const DEFAULT_REL = "noopener noreferrer";

const CustomLink = link => {
  if (link.external) {
    const newLinkProps = {
      className: link.styles,
      href: link.href,
      title: link.title,
      target: link.target || DEFAULT_TARGET,
      rel: link.rel || DEFAULT_REL
    };
    return <a {...newLinkProps}>{link.placeholder}</a>;
  } else {
    const newLinkProps = {
      className: link.styles,
      to: link.href
    };
    return <Link {...newLinkProps}>{link.placeholder}</Link>;
  }
};

export default CustomLink;
