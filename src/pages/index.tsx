import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import useTheme from "../hooks/useTheme.hook";
import Image from "next/image";
import Typography from "../components/elements/Typography";

interface Props {}

/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<Props> = () => {
  const {
    palette: {
      color: { primary, secondary, secondaryText },
    },
  } = useTheme();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: primary,
        color: secondaryText,
      }}
    >
      <Head>
        <title>Jannik Will | Startseite</title>
      </Head>
      <NavigationBar />
      <main
        style={{
          alignSelf: "stretch",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Hallo, ich bin Jannik</Typography>
          <Typography>
            ich bin leidenschaftlicher Softwareentwickler und Designer aus
            Dortmund
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/img/dortmund-u.jpg" width="100%" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
