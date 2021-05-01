import { css } from "@emotion/react";
import React from "react";
import { FlexContainer } from "../flexcontainer";
import { Typography } from "../typography";

export interface Props {
  selected: boolean;
  onChange?: (
    event: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >,
    value: boolean,
  ) => void;
  title: string;
}

/**
 * An Radiobutton React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Radiobutton: React.FC<Props> = ({
  selected,
  onChange,
  title,
}) => {
  return (
    <FlexContainer columnGap="0.625em">
      <div
        role="button"
        aria-hidden="true"
        onClick={(event) =>
          onChange?.(event, !selected)
        }
        css={css`
          & {
            border: 2px solid #3d899b;
            box-sizing: border-box;
            width: 1.25em;
            height: 1.25em;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        {selected ? (
          <div
            css={css`
              & {
                width: 0.625em;
                height: 0.625em;
                background-color: #3d899b;
                border-radius: 100%;
              }
            `}
          />
        ) : undefined}
      </div>
      <Typography>{title}</Typography>
    </FlexContainer>
  );
};
