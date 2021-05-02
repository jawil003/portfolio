import React from "react";
import { useField } from "formik";
import { css } from "@emotion/react";
import { FlexContainer } from "../flexcontainer";
import designSystem from "../../../styles/designSystem";

const inputStyles = css`
  & {
    border: 0.13333333333333333em solid
      #000000;
    box-sizing: border-box;
    border-radius: 1.25em;
    padding: 0.75em 0.8em;
  }
  && {
    margin-bottom: 0;
  }
  &&::placeholder,
  &&::-webkit-input-placeholder,
  &&::-ms-input-placeholder,
  &&::-moz-placeholder {
    color: #000000;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    opacity: 0.5;
  }
  &:focus-within {
    outline: none;
  }
`;
export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  name: string;
  icon?: {
    align: "left" | "right";
    value: React.ComponentType;
  };
}

/**
 * An Textfield React Component in the Anywhere School Design System Specification.
 * @author Jannik Will
 * @version 0.1
 */
export const Textfield: React.FC<Props> = ({
  title,
  className,
  icon,
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
          {inputProps.required
            ? "*"
            : undefined}
        </label>
        {/** TODO: Complete Icon Integration for textfield */}
        {icon ? (
          <FlexContainer
            css={inputStyles}
          />
        ) : (
          <input
            css={inputStyles}
            {...inputProps}
            {...field}
          />
        )}

        <div
          css={css`
            && {
              color: ${designSystem
                .colors.palette.red
                .base};
              margin: 0;

              font-size: 0.75em;
              line-height: 1em;
              height: 1em;
              margin-top: 0.25em;
              margin-left: 1em;
            }
          `}
        >
          {meta.touched && meta.error
            ? meta.error
            : undefined}
        </div>
      </FlexContainer>
    </>
  );
};

Textfield.defaultProps = {
  value: "",
};
