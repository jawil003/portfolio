import { css } from "@emotion/react";
import React from "react";

export interface Props
  extends Omit<
    React.HTMLAttributes<HTMLInputElement>,
    "required"
  > {
  value: string;
  title: string;
  placeholder: string;
  required?: boolean;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * An Textfield React Component in the Anywhere School Design System Specification.
 * @author Jannik Will
 * @version 0.1
 */
export const Textfield: React.FC<Props> = ({
  value,
  title,
  placeholder,
  required,
  error,
  ...inputProps
}) => {
  return (
    <div
      css={css`
        & {
          background-color: var(
            --white
          );
          border: 2px solid
            ${error
              ? "#B74A66"
              : "#3d899b"};
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          padding: 8px 10px;
        }
      `}
    >
      <span
        css={css`
          & {
            font-weight: 400;
            font-size: 0.6666666666666666em;

            font-style: normal;
            color: ${error
              ? "#B74A66"
              : "#3d899b"};
          }
        `}
      >
        {title}
        {required ? "*" : undefined}
      </span>
      <input
        {...inputProps}
        value={value}
        css={css`
          & {
            font-size: 1em;
            border: none;
            background-color: var(
              --white
            );
            outline: none;
            color: var(--black);
            font-style: normal;
            font-weight: 400;

            height: 2.6666666666666665em;
          }
          &::placeholder,
          &:-ms-input-placeholder,
          &::-ms-input-placeholder {
            color: #3d899b;
            opacity: 0.4;
          }
        `}
        placeholder={placeholder}
      />
    </div>
  );
};

Textfield.defaultProps = {
  value: "",
  required: false,
  error: false,
};
