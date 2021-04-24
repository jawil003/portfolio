import React, {
  PropsWithChildren,
  useMemo,
} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import designSystem from "../../../../styles/designSystem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BaseStyle = (props: any) => css`
  & {
    font-family: ${props?.fontFamily as Props["fontFamily"]};
    text-align: ${props?.align as Props["align"]};
    font-style: ${(props?.italic as Props["italic"])
      ? "italic"
      : "normal"};
    margin: unset;
    text-decoration: ${props?.underline
      ? "underline"
      : "none"};
    max-width: ${props?.maxLength};
    letter-spacing: ${props?.letterSpacing ??
    "normal"};
    word-spacing: ${props?.wordSpacing ??
    "normal"};
    color: ${props?.color};
    word-wrap: ${props?.wrap
      ? "break-word"
      : "unset"};
    padding: unset;
  }
`;

type StyledComponents = {
  weight?: number;
  align?: Props["align"];
  italic?: Props["italic"];
  underline?: Props["underline"];
  maxLength?: Props["maxLength"];
  letterSpacing?: Props["letterSpacing"];
  wordSpacing?: Props["wordSpacing"];
  wrap?: Props["wrap"];
  fontFamily: Props["fontFamily"];
  color?: Props["color"];
};

const H1 = styled.h1<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 300};
    font-size: 6em;
  }
`;

const H2 = styled.h2<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 300};
    font-size: 3.75em;
  }
`;

const H3 = styled.h3<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 400};
    font-size: 3em;
  }
`;

const H4 = styled.h4<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 400};
    font-size: 2.125em;
  }
`;

const H5 = styled.h5<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 400};
    font-size: 1.5em;
  }
`;

const H6 = styled.h6<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 400};
    font-size: 1.25em;
  }
`;

const B1 = styled.p<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 400};
    font-size: 1em;
  }
`;

const B2 = styled.p<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 400};
    font-size: 0.875em;
  }
`;

const S1 = styled.span<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 300};
    font-size: 1em;
  }
`;

const S2 = styled.span<StyledComponents>`
  ${BaseStyle}
  & {
    font-weight: ${({
      weight,
    }: {
      weight?: number;
    }) => weight ?? 300};
    font-size: 0.875em;
  }
`;

export interface Props
  extends PropsWithChildren<unknown> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "b1"
    | "b2"
    | "s1"
    | "s2";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ElementType<any>;
  className?: string;
  align?:
    | "start"
    | "end"
    | "justify"
    | "center";
  bold?:
    | "semi-bold"
    | "bold"
    | "bolder";
  italic?: boolean;
  underline?: boolean;
  maxLength?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  wrap?: boolean;
  color?: string;
  fontFamily?: string;
}

const resolveVariant = (
  variant: Props["variant"],
  component: Props["component"],
  text: Props["children"],
  className: Props["className"],
  bold: Props["bold"],
  align: Props["align"],
  italic: Props["italic"],
  underline: Props["underline"],
  letterSpacing: Props["letterSpacing"],
  wordSpacing: Props["wordSpacing"],
  wrap: Props["wrap"],
  maxLength: Props["maxLength"],
  fontFamily: Props["fontFamily"],
  color?: Props["color"],
) => {
  const weight =
    bold === "bold"
      ? designSystem.font.fontWeight
          .bold
      : bold === "semi-bold"
      ? designSystem.font.fontWeight
          .semiBold
      : bold === "bolder"
      ? designSystem.font.fontWeight
          .bolder
      : undefined;

  switch (variant) {
    case "h1": {
      return (
        <H1
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          letterSpacing={letterSpacing}
          wordSpacing={wordSpacing}
          wrap={wrap}
          fontFamily={fontFamily}
          maxLength={maxLength}
          as={component}
        >
          {text}
        </H1>
      );
    }
    case "h2": {
      return (
        <H2
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          letterSpacing={letterSpacing}
          wordSpacing={wordSpacing}
          wrap={wrap}
          maxLength={maxLength}
          fontFamily={fontFamily}
          as={component}
        >
          {text}
        </H2>
      );
    }
    case "h3": {
      return (
        <H3
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          wordSpacing={wordSpacing}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          fontFamily={fontFamily}
          wrap={wrap}
          as={component}
        >
          {text}
        </H3>
      );
    }
    case "h4": {
      return (
        <H4
          color={color}
          align={align}
          weight={weight}
          underline={underline}
          italic={italic}
          className={className}
          wordSpacing={wordSpacing}
          letterSpacing={letterSpacing}
          fontFamily={fontFamily}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </H4>
      );
    }
    case "h5": {
      return (
        <H5
          color={color}
          align={align}
          italic={italic}
          weight={weight}
          underline={underline}
          className={className}
          wordSpacing={wordSpacing}
          fontFamily={fontFamily}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </H5>
      );
    }

    case "h6": {
      return (
        <H6
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          fontFamily={fontFamily}
          wordSpacing={wordSpacing}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </H6>
      );
    }
    case "b1": {
      return (
        <B1
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          wordSpacing={wordSpacing}
          fontFamily={fontFamily}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </B1>
      );
    }
    case "b2": {
      return (
        <B2
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          wordSpacing={wordSpacing}
          fontFamily={fontFamily}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </B2>
      );
    }
    case "s1": {
      return (
        <S1
          color={color}
          align={align}
          weight={weight}
          italic={italic}
          underline={underline}
          className={className}
          wordSpacing={wordSpacing}
          fontFamily={fontFamily}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </S1>
      );
    }
    case "s2": {
      return (
        <S2
          color={color}
          align={align}
          weight={weight}
          underline={underline}
          italic={italic}
          className={className}
          wordSpacing={wordSpacing}
          fontFamily={fontFamily}
          letterSpacing={letterSpacing}
          maxLength={maxLength}
          wrap={wrap}
          as={component}
        >
          {text}
        </S2>
      );
    }
  }
};

/**
 * An Typography React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const Typography: React.FC<Props> = ({
  variant,
  component,
  children,
  className,
  bold,
  align,
  italic,
  color,
  underline,
  letterSpacing,
  maxLength,
  wordSpacing,
  wrap,
  fontFamily,
}) => {
  return (
    <>
      {useMemo(
        () =>
          resolveVariant(
            variant,
            component,
            children,
            className,
            bold,
            align,
            italic,
            underline,
            letterSpacing,
            wordSpacing,
            wrap,
            maxLength,
            fontFamily,
            color,
          ),
        [
          align,
          bold,
          children,
          className,
          component,
          variant,
          italic,
          color,
          underline,
          letterSpacing,
          wordSpacing,
          maxLength,
          wrap,
          fontFamily,
        ],
      )}
    </>
  );
};

Typography.defaultProps = {
  wrap: false,
  variant: "b1",
  align: "start",
  color:
    designSystem.colors.brand
      .secondaryText,
};
