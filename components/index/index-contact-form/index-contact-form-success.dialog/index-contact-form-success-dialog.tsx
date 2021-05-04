import React from "react";
import { css } from "@emotion/react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import designSystem from "../../../../styles/designSystem";
import { Typography } from "../../../shared/typography";
import { DialogWrapper } from "../../../shared/dialog-wrapper";
import { Spacer } from "../../../shared/spacer/spacer";

export interface Props {
  show: boolean;
}

/**
 * An IndexContactFormSuccessDialog React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexContactFormSuccessDialog: React.FC<Props> = ({
  show,
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
          <Spacer height="20px" />
          <Typography
            variant="h5"
            component="span"
          >
            Erfolgreich abgesendet
          </Typography>
        </div>
      </DialogWrapper>
    </div>
  );
};
