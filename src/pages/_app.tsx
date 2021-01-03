import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "../components/context/ThemeProvider";
import Button from "src/components/elements/generic/Button";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import Typography from "src/components/elements/generic/Typography";

const DIALOG_SHOWN_KEY = "beta_dialog_shown";

/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  useEffect(()=>{
    const shown =
      localStorage.getItem(
        DIALOG_SHOWN_KEY,
      ) === "1";

    if (
      !shown &&
      process.env.NEXT_PUBLIC_BETA ===
        "1"
    )
      setShowDialog(true);
  }, [])
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
        {showDialog ? (
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            style={{
              position: "absolute",
              zIndex: 300,
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor:
                "rgba(0,0,0, 0.53)",
            }}
          >
            <div>
              <FlexContainer
                justifyContent="center"
                alignItems="center"
                rowGap="30px"
                direction="column"
                style={{
                  padding: "40px 80px",
                  backgroundColor:
                    "white",
                  borderRadius: "30px",
                }}
              >
                <Typography
                  variant="b1"
                  
                  bold="semi-bold"
                  maxLength="193px"
                  align="center"
                >
                  Diese Seite befindet
                  sich noch im Aufbau,
                  daher sind nicht
                  alle Funktionen
                  bereits verfügbar bzw. funktiornieren diese eventuell noch nicht
                  korrekt.
                </Typography>
                <Button
                  onClick={() =>{
                    setShowDialog(false)
                    localStorage.setItem(
                      DIALOG_SHOWN_KEY, "1"
                    );
                  }
                  }
                  backgroundColor="#386A38"
                  text="Weiter"
                />
              </FlexContainer>
            </div>
          </FlexContainer>
        ) : undefined}
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
