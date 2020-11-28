import Head from "next/head";
import React from "react";
import NavigationBar from "../components/NavigationBar";

interface Props {}

/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "var(--primaryDark)",
      }}
    >
      <Head>
        <title>Jannik Will | Startseite</title>
      </Head>
      <NavigationBar />
    </div>
  );
};

export default Index;
