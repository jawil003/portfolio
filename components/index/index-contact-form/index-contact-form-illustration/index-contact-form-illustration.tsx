import { css } from "@emotion/react";
import React from "react";
import Person from "../../../../designs/person.design";
import { FlexContainer } from "../../../shared/flexcontainer";
import { IndexContactFormSuccessDialog } from "../index-contact-form-success.dialog";

export interface Props {}

/**
 * An IndexContactFormIllustration React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexContactFormIllustration: React.FC<Props> = () => {
  return (
    <>
      <FlexContainer
        direction="column"
        justifyContent="center"
        css={css`
          & {
            position: relative;
          }
        `}
      >
        <Person height="100%" />
      </FlexContainer>
    </>
  );
};
