import React from "react";
interface Props {
  icon: JSX.Element;
  href: string;
}
const SkillItem: React.FC<Props> = ({
  children,
  href,
  icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div>{icon}</div>
        <p
          style={{
            display: "inline-block",
            margin: "0px",
            marginTop: "10px",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          {children}
        </p>
      </div>
    </a>
  );
};

export default SkillItem;
