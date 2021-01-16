import React, {
  forwardRef,
  PropsWithChildren,
} from "react";
import css from "styled-jsx/css";

export const typographyClasses = css`
  .bold {
    font-weight: 700;
  }
  .semi-bold {
    font-weight: 600;
  }
  .bolder {
    font-weight: 600;
  }
  .italic {
    font-styles: italic;
  }
  .underline {
    text-decoration: underline;
  }
  .align-left {
    text-align: left;
  }
  .align-center {
    text-align: center;
  }
  .align-right {
    text-align: right;
  }
  .align-justify {
    text-align: justify;
  }
`;

const generatestyles = (
  fontSize: number,
  color?: string,
  fontFamily?: string,
  align?:
    | "left"
    | "center"
    | "right"
    | "justify",
  bold?:
    | "semi-bold"
    | "bold"
    | "bolder",
  italic?: boolean,
  underline?: boolean,
  maxLength?: string,
  letterSpacing?: number,
  wordSpacing?: number,
  wrap?: boolean,
) => {
  return css.resolve`
    .root {
      font-size: ${fontSize}rem;
      font-weight: ${bold ===
      "semi-bold"
        ? 600
        : bold === "bold"
        ? 700
        : bold === "bolder"
        ? 900
        : fontSize > 1
        ? 700
        : 400};
      color: ${color};
      font-family: ${fontFamily};
      text-align: ${align};
      font-style: ${italic
        ? "italic"
        : "normal"};
      text-decoration: ${underline
        ? "underline"
        : "normal"};
      max-width: ${maxLength};
      letter-spacing: ${letterSpacing};
      word-spacing: ${wordSpacing};
      word-wrap: ${wrap
        ? "break-word"
        : "normal"};
    }
  `;
};

export interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "b1"
    | "b2"
    | "b3"
    | "custom";
  size?: "string";
  color?: string;
  fontFamily?: string;
  align?:
    | "left"
    | "center"
    | "right"
    | "justify";
  bold?:
    | "semi-bold"
    | "bold"
    | "bolder";
  italic?: boolean;
  underline?: boolean;
  inline?: boolean;
  maxLength?: string;
  letterSpacing?: number;
  wordSpacing?: number;
  wrap?: boolean;
}

/**
 * An Typography React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Typography: React.FC<Props> = forwardRef<
  | HTMLHeadingElement
  | HTMLParagraphElement,
  PropsWithChildren<Props>
>(
  (
    {
      variant,
      color,
      children,
      fontFamily,
      align,
      bold,
      italic,
      underline,
      inline,
      maxLength,
      letterSpacing,
      wordSpacing,
      wrap,
    },
    ref,
  ) => {
    const {
      className,
      styles,
    } = generatestyles(
      variant === "b1"
        ? 1
        : variant === "b2"
        ? 0.8
        : 0.6,
      color,
      fontFamily,
      align,
      bold,
      italic,
      underline,
      maxLength,
      letterSpacing,
      wordSpacing,
      wrap,
    );
    if (variant?.includes("b")) {
      if (inline)
        return (
          <span ref={ref}>
            <style jsx>{`
              ${typographyClasses}
              span {
                color: ${color};
                max-width: ${maxLength};
                font-family: ${fontFamily};
                letter-spacing: ${letterSpacing};
                word-spacing: ${wordSpacing};
              }
            `}</style>
            {children}
          </span>
        );
      return (
        <p ref={ref}>
          <style jsx>{`
            ${typographyClasses}
            p {
              color: ${color};
              max-width: ${maxLength};
              font-family: ${fontFamily};
              letter-spacing: ${letterSpacing};
              word-spacing: ${wordSpacing};
            }
          `}</style>
          {children}
        </p>
      );
    }
    switch (variant) {
      case "h1": {
        return (
          <>
            <h1
              ref={ref}
              className={`${className}`}
            >
              {children}
            </h1>
            {styles}
          </>
        );
      }
      case "h2": {
        return (
          <h2
            ref={ref}
            className={`${className} root`}
          >
            {styles}
            {children}
          </h2>
        );
      }
      case "h3": {
        return (
          <>
            <h3
              ref={ref}
              className={`${className} root`}
            >
              {children}
            </h3>
            {styles}
          </>
        );
      }
      case "h4": {
        return (
          <h4
            ref={ref}
            className={`${className} root`}
          >
            {styles}
            {children}
          </h4>
        );
      }
      case "h5": {
        return (
          <h5
            ref={ref}
            className={`${className} root`}
          >
            {styles}
            {children}
          </h5>
        );
      }
      default: {
        return (
          <h6
            ref={ref}
            className={`${className} root`}
          >
            {styles}
            {children}
          </h6>
        );
      }
    }
  },
);

Typography.displayName = "Typography";

Typography.defaultProps = {
  variant: "b1",
  color: "var(--secondaryText)",
  align: "left",
  italic: false,
  underline: false,
  inline: false,
  wrap: false,
  maxLength: "100%",
};

export default Typography;
