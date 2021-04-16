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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>

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
