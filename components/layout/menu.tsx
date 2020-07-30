import React from "react";
import Link from "next/link";

export const Menu = () => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
};
