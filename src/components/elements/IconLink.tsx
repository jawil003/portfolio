import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  external?: boolean;
}

/**
 * An IconLink React Component.
 * @author Jannik Will
 * @version 0.1
 */
const IconLink: React.FC<Props> = ({ children, href, external }) => {
  return (
    <>
      {external ? (
        <a target="_blank" href={href}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
    </>
  );
};

export default IconLink;
