import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../components/ThemeProvider";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

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
        <NavigationBar />
        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
