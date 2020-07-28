import React, { Children } from "react";
import NextLink from "next/link";
import clientSideLang from "next-translate/clientSideLang";
export default function Link({ children, href, noLang, ...props }) {
  const lng = clientSideLang();
  const child = Children.only(
    typeof children === "string" ? <a>{children}</a> : children
  );

  function onClick(e) {
    const el = document.querySelector("html");
    if (el) el.lang = lng;
    if (typeof child.props.onClick === "function") {
      child.props.onClick(e);
    }
  }

  return (
    <NextLink href={noLang ? href : `/Portfolio/${lng}/${href}`} {...props}>
      {React.cloneElement(child, { onClick })}
    </NextLink>
  );
}
