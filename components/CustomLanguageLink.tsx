import React, { Children } from "react";
import NextLink, { LinkProps } from "next/link";
import clientSideLang from "next-translate/clientSideLang";
import * as i18njson from "../i18n.json";
interface Props extends LinkProps {
  href: string;
  as?: string;
  children?: JSX.Element | JSX.Element[];
}
const Link: React.FC<Props> = ({ children, href, as, ...props }: Props) => {
  const lng = clientSideLang();
  const basePath =
    process.env.NODE_ENV !== "production" || process.env.IS_LOCAL === "true"
      ? ""
      : "/Portfolio";
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
          ? `${basePath}${href}`
          : `${basePath}/${lng}${href}`
      }
      as={
        as
          ? lng === i18njson.defaultLanguage
            ? `${basePath}${as}`
            : `${basePath}/${lng}${as}`
          : lng === i18njson.defaultLanguage
          ? `${basePath}${href}`
          : `${basePath}/${lng}${href}`
      }
      {...props}
    >
      {React.cloneElement(child, { onClick })}
    </NextLink>
  );
};

export default Link;
