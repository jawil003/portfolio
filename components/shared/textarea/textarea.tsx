import { css } from "@emotion/react";
import { useField } from "formik";
import React from "react";
import designSystem from "../../../styles/designSystem";
import { FlexContainer } from "../flexcontainer";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  title: string;
  rows?: number;
}

/**
 * An Textarea React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Textarea: React.FC<Props> = ({
  title,
  className,
  ...textareprops
}) => {
  const [field, meta] = useField(
    textareprops.name,
  );
  return (
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
        htmlFor={textareprops.name}
      >
        {title}
        {textareprops.required
          ? "*"
          : undefined}
      </label>
      <textarea
        css={css`
          & {
            border: 0.13333333333333333em
              solid #000000;
            box-sizing: border-box;
            border-radius: 1.25em;
            padding: 0.75em 0.8em;
            resize: none;
            width: 100%;
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
        `}
        {...textareprops}
        {...field}
      />
      <div
        css={css`
          && {
            color: ${designSystem.colors
              .palette.red.base};
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
  );
};
