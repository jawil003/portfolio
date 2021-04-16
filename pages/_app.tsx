import React, {
  useEffect,
} from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import BetaDialog from "../components/elements/BetaDialog";
import globalStyles from "../styles/styles";
import useViewportSizes from "use-viewport-sizes";
import designSystem from "@style/designSystem";
import { NotOptimized } from "components/elements/NotOptimized";
import { DefaultSeo } from "next-seo";
/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  const [
    vpWidth,
    _,
    updateVpSizes,
  ] = useViewportSizes({
    dimension: "w",
  });

  useEffect(() => {
    updateVpSizes?.();
  }, [updateVpSizes]);
  return (
    <>
      {globalStyles}
      <DefaultSeo
        title="Jannik Will: Erfahrungen Softwareentwicklung"
        description="Meine Erfahrungen im Bereich der Softwareentwicklung"
      />

      {vpWidth >=
      designSystem.breakpoints
        .tabletPortraitUpNumber ? (
        <Component {...pageProps} />
      ) : (
        <NotOptimized />
      )}
      <BetaDialog />
    </>
  );
};

export default MyApp;
