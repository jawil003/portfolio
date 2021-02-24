import { css } from "@emotion/react";
import styled from "@emotion/styled";
import designSystem from "@style/designSystem";
import React from "react";
import Typography from "./Typography";

const Input = styled.textarea`
  & {
    font-size: 1.15em;
    width: 100%;
    border: none;
    resize: none;
    background: transparent;
  }
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }
`;

export interface Props {
  title?: string;
  placeholder?: string;
  area?: boolean;
  rows?: number;
  value: string;
  onChange?: (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
    >,
  ) => void;
}

/**
 * An TextField React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TextField: React.FC<Props> = ({
  title,
  placeholder,
  rows,
  area,
  onChange,
  value,
}) => {
  return (
    <div
      css={css`
        & {
          display: grid;
          grid-template-rows: auto auto;
          display: inline-block;
        }
      `}
    >
      <Typography variant="b1">
        {title}
      </Typography>
      <div
        css={css`
          & {
            padding: 10px 15px;
            background: ${designSystem
              .colors.palette.grey
              .light};
            border-radius: 5px;
            width: 100%;
          }
        `}
      >
        {area ? (
          <Input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            cols={23}
            rows={rows}
          ></Input>
        ) : (
          <Input
            as="input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  title: "Bitte Titel eingeben",
  area: false,
  value: "",
};

export default React.memo(
  TextField,
  (prev, next) =>
    prev.value === next.value,
);
