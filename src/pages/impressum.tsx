import Head from "next/head";
import React from "react";
import AtHomeDesign from "../components/designs/atHome.design";
import Spacer from "../components/elements/generic/Spacer";
import Typography from "../components/elements/generic/Typography";
import NavigationBar from "../components/layout/DesktopNavigationBar";
import HeaderWithSpacer from "src/components/layout/HeaderWithSpacer";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import useBreakpoint, {
  breakpoints,
} from "src/hooks/useBreakpoints.hook";
import { title } from "../../package.json";
import { generateIndividualTags } from "src/services/meta.service";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
  const { width } = useBreakpoint();
  return (
    <>
      <Head>
        {generateIndividualTags({
          title: `${title} | Impressum`,
          description:
            "Das Impressum meiner Seite.",
        })}
      </Head>

      <NavigationBar />
      <BackgroundWrapper
        background={
          <div
            style={{
              marginLeft:
                width >= breakpoints.lg
                  ? "50%"
                  : undefined,
              width:
                width >= breakpoints.lg
                  ? "50%"
                  : "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              opacity:
                width >= breakpoints.lg
                  ? 1
                  : 0.3,
            }}
          >
            <AtHomeDesign width="100%" />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <Typography
            variant="h3"
            align="center"
          >
            Impressum
          </Typography>
          <Spacer height="10px" />
          <Typography align="center">
            Jannik Will <br /> 44269
            Dortmund <br /> Deutschland
          </Typography>
        </HeaderWithSpacer>
      </BackgroundWrapper>
    </>
  );
};

export default Contact;
