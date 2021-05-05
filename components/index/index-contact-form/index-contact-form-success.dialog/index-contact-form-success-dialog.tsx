import React from "react";
import { css } from "@emotion/react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { motion } from "framer-motion";
import designSystem from "../../../../styles/designSystem";
import { Typography } from "../../../shared/typography";
import { Spacer } from "../../../shared/spacer/spacer";

export interface Props {
  mode: "success" | "error";
}

/**
 * An IndexContactFormSuccessDialog React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexContactFormSuccessDialog: React.FC<Props> = ({
  mode,
}) => {
  return (
    <motion.div
      css={css`
        & {
          padding: 50px 30px;
          background-color: ${designSystem
            .colors.palette.white.base};
          border-radius: 20px;
          flex-direction: column;
          align-items: center;
          display: flex;
        }
      `}
    >
      {mode === "success" ? (
        <CheckCircleIcon
          css={css`
            && {
              fill: ${designSystem
                .colors.palette.green
                .base};
              font-size: 175px;
            }
          `}
        />
      ) : (
        <CancelIcon
          css={css`
            && {
              fill: ${designSystem
                .colors.palette.red
                .base};
              font-size: 175px;
            }
          `}
        />
      )}
      <Spacer height="20px" />
      <Typography
        variant="h5"
        component="span"
      >
        {mode === "success"
          ? "Erfolgreich abgesendet"
          : "Etwas ist schiefgelaufen"}
      </Typography>
    </motion.div>
  );
};
