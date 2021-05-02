import React from "react";
import { useField } from "formik";
import { css } from "@emotion/react";
import { FlexContainer } from "../flexcontainer";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  name: string;
}

/**
 * An Textfield React Component in the Anywhere School Design System Specification.
 * @author Jannik Will
 * @version 0.1
 */
export const Textfield: React.FC<Props> = ({
  title,
  className,
  ...inputProps
}) => {
  const [field, meta] = useField(
    inputProps.name,
  );
  return (
    <>
      <FlexContainer
        direction="column"
        className={className}
        rowGap="0.6333333333333333em"
      >
        <label
          css={css`
            & {
              font-style: normal;
              font-weight: 600;
              font-size: 1em;
            }
          `}
          htmlFor={inputProps.name}
        >
          {title}
        </label>
        <input
          css={css`
            & {
              border: 0.13333333333333333em
                solid #000000;
              box-sizing: border-box;
              border-radius: 20px;
              padding: 0.5em 0.8em;
            }
            &&::placeholder,
            &&::-webkit-input-placeholder,
            &&::-ms-input-placeholder,
            &&::-moz-placeholder {
              color: #000000;
              font-style: normal;
              font-weight: normal;
              font-size: 1em;
              opacity: 1;
            }
            &:focus-within {
              outline: none;
            }
          `}
          {...inputProps}
          {...field}
        />
      </FlexContainer>
      {meta.touched && meta.error ? (
        <div className="error">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

Textfield.defaultProps = {
  value: "",
};
