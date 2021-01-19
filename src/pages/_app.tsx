import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import BetaDialog from "src/components/elements/responsive/BetaDialog";
import globalStyles from "../styles/styles";
/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      {globalStyles}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>

      <Component {...pageProps} />
      <BetaDialog />
    </>
  );
};

export default MyApp;
