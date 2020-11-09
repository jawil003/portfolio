import React from "react";
interface Props {
  icon: JSX.Element;
  href: string;
}
const ProjectItem: React.FC<Props> = ({
  children,
  href,
  icon,
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          margin: "30px",
        }}
      >
        <div>{icon}</div>
        <p
          style={{
            display: "inline-block",
            margin: "0px",
            marginTop: "1px",
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

export default ProjectItem;
