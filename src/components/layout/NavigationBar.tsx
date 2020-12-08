import React from "react";
import Spacer from "../elements/generic/Spacer";
import HomeIcon from "../icons/home.icon";
import KnowledgeIcon from "../icons/knowledge.icon";
import LearningIcon from "../icons/learning.icon";
import Logo from "../elements/custom/Logo";
import NavigationBarItem from "../elements/custom/NavigationBarItem";

interface Props {}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC<Props> = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100px",
      }}
    >
      <div>
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavigationBarItem href="/" icon={<HomeIcon height="23px" />}>
          Start
        </NavigationBarItem>
        <Spacer height="20px" />
        <NavigationBarItem
          href="/knowledge"
          icon={<KnowledgeIcon height="23px" />}
        >
          Was ich kann
        </NavigationBarItem>
        <Spacer height="20px" />
        <NavigationBarItem href="/resume" icon={<LearningIcon height="23px" />}>
          Was ich gelernt habe
        </NavigationBarItem>
      </div>
    </nav>
  );
};

export default NavigationBar;
