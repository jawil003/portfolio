import React from "react";
import FlaskDesign from "../../components/designs/flask.design";
import ScienceDesign from "../../components/designs/science.design";
import Spacer from "../../components/elements/generic/Spacer";
import Typography from "../../components/elements/generic/Typography";
import HeaderWithIcon from "../../components/layout/HeaderWithIcon";
import NavigationBar from "../../components/layout/NavigationBar";

interface Props {}

/**
 * An TestDrivenDevelopment React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TestDrivenDevelopment: React.FC<Props> = () => {
  return (
    <>
      <NavigationBar />
      <HeaderWithIcon first icon={<ScienceDesign width="70%" />}>
        <Typography variant="h3" align="center">
          Test Driven Development
        </Typography>
        <Spacer height="0.4em" />
        <Typography align="center" italic>
          Und was das für mich bedeutet
        </Typography>
      </HeaderWithIcon>
    </>
  );
};

export default TestDrivenDevelopment;
