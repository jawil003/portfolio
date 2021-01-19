import React, {
  forwardRef,
  PropsWithChildren,
} from "react";
import { css } from "@emotion/react";
import designSystem from "src/styles/designSystem";

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

const getFontSizeForVariant = (
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
    | "custom",
) => {
  switch (variant) {
    case "h1": {
      return 5;
    }
    case "h2": {
      return 4;
    }
    case "h3": {
      return 3;
    }
    case "h4": {
      return 2;
    }
    case "h5": {
      return 1.5;
    }
    case "h6": {
      return 1.1;
    }

    case "b2": {
      return 0.8;
    }
    case "b3": {
      return 0.6;
    }
    default: {
      return 1;
    }
  }
};

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
  return css`
    & {
      font-size: ${fontSize}rem;
      font-weight: ${bold ===
      "semi-bold"
        ? designSystem.font.fontWeight
            .semiBold
        : bold === "bold"
        ? designSystem.font.fontWeight
            .bold
        : bold === "bolder"
        ? designSystem.font.fontWeight
            .bold
        : fontSize > 1
        ? designSystem.font.fontWeight
            .semiBold
        : designSystem.font.fontWeight
            .light};
      ${color
        ? `color: ${color}`
        : undefined};
      ${fontFamily
        ? `font-family: ${fontFamily}`
        : undefined};
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
  className?: string;
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
      className,
    },
    ref,
  ) => {
    const styles = generatestyles(
      getFontSizeForVariant(variant),
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
          <>
            <span
              className={className}
              ref={ref}
              css={[styles]}
            >
              {children}
            </span>
          </>
        );
      return (
        <>
          <p
            ref={ref}
            className={className}
            css={[styles]}
          >
            {children}
          </p>
        </>
      );
    }
    switch (variant) {
      case "h1": {
        return (
          <>
            <h1
              ref={ref}
              className={className}
              css={[styles]}
            >
              {children}
            </h1>
          </>
        );
      }
      case "h2": {
        return (
          <>
            <h2
              ref={ref}
              className={className}
              css={[styles]}
            >
              {children}
            </h2>
          </>
        );
      }
      case "h3": {
        return (
          <>
            <h3
              className={className}
              ref={ref}
              css={styles}
            >
              {children}
            </h3>
          </>
        );
      }
      case "h4": {
        return (
          <>
            <h4
              className={className}
              ref={ref}
              css={[styles]}
            >
              {children}
            </h4>
          </>
        );
      }
      case "h5": {
        return (
          <h5
            className={className}
            ref={ref}
            css={styles}
          >
            {children}
          </h5>
        );
      }
      default: {
        return (
          <h6
            className={className}
            ref={ref}
            css={[styles]}
          >
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
  color:
    designSystem.colors.brand
      .secondaryText,
  align: "left",
  italic: false,
  underline: false,
  inline: false,
  wrap: false,
  maxLength: "100%",
};

export default Typography;
