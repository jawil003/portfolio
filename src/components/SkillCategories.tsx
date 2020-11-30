import Twitter from "./icons/twitter.icon";
import React from "react";
import SkillCategoriesItem from "./SkillCategoriesItem";

interface Props {}

/**
 * An SkillCategories React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SkillCategories: React.FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <SkillCategoriesItem
        icon={<Twitter height="100%" />}
        title="Server"
        description="Testdescr"
      />
    </div>
  );
};

export default SkillCategories;
