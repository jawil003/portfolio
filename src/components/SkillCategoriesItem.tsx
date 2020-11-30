import React from "react";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SkillCategoriesItem: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <div
      style={{
        height: "64px",
        width: "64px",
        display: "grid",
      }}
    >
      <div
        style={{
          borderRadius: "100%",
          backgroundColor: "var(--red)",
          padding: "10px",
        }}
      >
        {icon}
      </div>
      <div></div>
    </div>
  );
};

export default SkillCategoriesItem;
