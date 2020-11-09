import React from "react";
interface Props {
  href: string;
  title: string;
  color:
    | "#E74C3C"
    | "#3498DB"
    | "#4caf50"
    | "#8E44AD"
    | "#F39C12";
}
const SourcesItem: React.FC<Props> = ({
  color,
  title,
  href,
}: Props) => {
  return (
    <a
      href={href}
      style={{
        textAlign: "center",
        display: "block",
        padding: "30px",
        width: "150px",
        margin: "20px",
        backgroundColor: color,
      }}
    >
      {title}
    </a>
  );
};

export default SourcesItem;
