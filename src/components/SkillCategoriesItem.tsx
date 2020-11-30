import React from "react";

interface Props {
  icon: JSX.Element;
  color?: string;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SkillCategoriesItem: React.FC<Props> = ({ icon, color }) => {
  return (
    <div
      style={{
        height: "64px",
        width: "64px",
        backgroundColor: color,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
    </div>
  );
};

SkillCategoriesItem.defaultProps = { color: "var(--blue)" };

export default SkillCategoriesItem;
