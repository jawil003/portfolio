import { css } from "@emotion/react";
import React, {
  useEffect,
  useState,
} from "react";
import Button from "../generic/Button";
import FlexContainer from "../generic/FlexContainer";
import Typography from "../generic/Typography";

const DIALOG_SHOWN_KEY =
  "beta_dialog_shown";

/**
 * An BetaDialog React Component.
 * @author Jannik Will
 * @version 0.1
 */
const BetaDialog: React.FC = () => {
  const [
    showDialog,
    setShowDialog,
  ] = useState(false);
  useEffect(() => {
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
  }, []);
  return (
    <>
      {showDialog ? (
        <FlexContainer
          justifyContent="center"
          alignItems="center"
          css={css`
            position: absolute;
            z-index: 300;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(
              0,
              0,
              0,
              0.53
            );
          `}
        >
          <div>
            <FlexContainer
              justifyContent="center"
              alignItems="center"
              rowGap="30px"
              direction="column"
              css={css`
                & {
                  padding: 40px 80px;
                  background-color: white;
                  border-radius: 30px;
                }
              `}
            >
              <Typography
                variant="b1"
                bold="semi-bold"
                maxLength="193px"
                align="center"
              >
                Diese Seite befindet
                sich noch im Aufbau,
                daher sind nicht alle
                Funktionen bereits
                verfügbar bzw.
                funktiornieren diese
                eventuell noch nicht
                korrekt.
              </Typography>
              <Button
                onClick={() => {
                  setShowDialog(false);
                  localStorage.setItem(
                    DIALOG_SHOWN_KEY,
                    "1",
                  );
                }}
                backgroundColor="#386A38"
                text="Weiter"
              />
            </FlexContainer>
          </div>
        </FlexContainer>
      ) : undefined}
    </>
  );
};

export default BetaDialog;
