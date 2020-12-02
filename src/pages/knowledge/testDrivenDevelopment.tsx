import React from "react";
import FlaskDesign from "../../components/designs/flask.design";
import Spacer from "../../components/elements/Spacer";
import Typography from "../../components/elements/Typography";
import HeaderWithIcon from "../../components/HeaderWithIcon";

interface Props {}

/**
 * An TestDrivenDevelopment React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TestDrivenDevelopment: React.FC<Props> = () => {
  return (
    <>
      <HeaderWithIcon icon={<FlaskDesign width="70%" />}>
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
