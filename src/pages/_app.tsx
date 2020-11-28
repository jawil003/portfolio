import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../components/ThemeProvider";

/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
