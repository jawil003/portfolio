import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../components/context/ThemeProvider";
import BetaDialog from "src/components/elements/custom/BetaDialog";

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
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
        <BetaDialog/>
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
