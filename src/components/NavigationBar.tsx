import React from "react";
import Spacer from "./elements/Spacer";
import HomeIcon from "./icons/home.icon";
import KnowledgeIcon from "./icons/knowledge.icon";
import LearningIcon from "./icons/learning.icon";
import Logo from "./Logo";
import NavigationBarItem from "./NavigationBarItem";

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
        width: "100vw",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: "125px",
      }}
    >
      <div>
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
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
