import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../components/context/ThemeProvider";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Spacer from "../components/elements/Spacer";

/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
