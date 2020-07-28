import React, { Children } from "react";
import NextLink, { LinkProps } from "next/link";
import clientSideLang from "next-translate/clientSideLang";
import * as i18njson from "../i18n.json";
interface Props extends LinkProps {
  href: string;
  as?: string;
  children?: JSX.Element | JSX.Element[];
}
export default function Link({ children, href, as, ...props }: Props) {
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
    <NextLink
      href={
        lng === i18njson.defaultLanguage
          ? `/Portfolio/${href}`
          : `/Portfolio/${lng}${href}`
      }
      as={
        lng === i18njson.defaultLanguage
          ? `/Portfolio/${as}`
          : `/Portfolio/${lng}${as}`
      }
      {...props}
    >
      {React.cloneElement(child, { onClick })}
    </NextLink>
  );
}
