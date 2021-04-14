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
    color: ${designSystem.colors.brand
      .secondaryText};
  }
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }
`;

export interface Props {
  error?: string;
  title?: string;
  name?: string;
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
  name,
  error,
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
      <Typography
        css={css`
          & {
            margin: 0px;
            margin-left: 5px;
            margin-bottom: 8px;
          }
        `}
        color={
          designSystem.colors.brand
            .secondaryText
        }
        variant="b1"
        bold="semi-bold"
      >
        {title}
      </Typography>
      <div
        css={css`
          & {
            padding: 10px 15px;
            border: 4px solid
              ${designSystem.colors
                .brand.secondaryText};
            border-radius: 20px;
            width: 100%;
            max-width: 450px;
          }
        `}
      >
        {area ? (
          <Input
            id={name}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            cols={23}
            rows={rows}
          ></Input>
        ) : (
          <Input
            id={name}
            name={name}
            as="input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </div>
      <span>{error}</span>
    </div>
  );
};

TextField.defaultProps = {
  title: "Bitte Titel eingeben",
  area: false,
  value: "",
};

export default TextField;
