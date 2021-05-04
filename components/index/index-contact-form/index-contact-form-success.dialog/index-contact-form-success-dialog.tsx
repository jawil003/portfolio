import React from "react";
import { css } from "@emotion/react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import designSystem from "../../../../styles/designSystem";
import { Typography } from "../../../shared/typography";
import { DialogWrapper } from "../../../shared/dialog-wrapper";
import { Spacer } from "../../../shared/spacer/spacer";

export interface Props {
  show: boolean;
  mode: "success" | "error";
}

/**
 * An IndexContactFormSuccessDialog React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexContactFormSuccessDialog: React.FC<Props> = ({
  show,
  mode,
}) => {
  return (
    <div>
      <DialogWrapper show={show}>
        <div
          css={css`
            & {
              padding: 50px 30px;
              background-color: ${designSystem
                .colors.palette.white
                .base};
              border-radius: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          {mode === "success" ? (
            <CheckCircleIcon
              css={css`
                && {
                  fill: ${designSystem
                    .colors.palette
                    .green.base};
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
        </div>
      </DialogWrapper>
    </div>
  );
};
