import React from "react";
import NavigationBar from "../components/NavigationBar";

interface Props {}

/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<Props> = () => {
  return (
    <>
      <NavigationBar />
      <div>Hello World</div>
    </>
  );
};

export default Index;
