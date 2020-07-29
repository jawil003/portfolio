import React from "react";
import { useRouter } from "next/router";
interface Props {
  children?: JSX.Element;
  selector: string;
  href?: string;
}
const CustomPageMover: React.FC<Props> = ({
  selector,
  children,
  href,
}: Props) => {
  const router = useRouter();
  function onClick(e: any): void {
    e.preventDefault();
    if (href) {
      router.push(`${href}`);
    }

    document.querySelector(selector).scrollIntoView({
      behavior: "smooth",
    });
  }
  return React.cloneElement(children, {
    onClick,
  });
};
export default CustomPageMover;
