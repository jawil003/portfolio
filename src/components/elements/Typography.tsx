import React, { CSSProperties } from "react";

const generateStyle = (
  fontSize: number,
  color?: string,
  fontFamily?: string,
  align?: "left" | "center" | "right" | "justify"
) => {
  const style: CSSProperties = {
    fontSize: `${fontSize}rem`,
    fontWeight: fontSize > 1 ? "bold" : "normal",
    color,
    fontFamily,
    textAlign: align,
    margin: "0px",
  };
  return style;
};

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b1" | "b2" | "b3";
  color?: string;
  fontFamily?: string;
  align?: "left" | "center" | "right" | "justify";
}

/**
 * An Typography React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Typography: React.FC<Props> = ({
  variant,
  color,
  children,
  fontFamily,
  align,
}) => {
  if (variant?.includes("b"))
    return (
      <p
        style={generateStyle(
          variant === "b1" ? 1 : variant === "b2" ? 0.8 : 0.6,
          color,
          fontFamily
        )}
      >
        {children}
      </p>
    );
  switch (variant) {
    case "h1": {
      return <h1 style={generateStyle(5, color, fontFamily)}>{children}</h1>;
    }
    case "h2": {
      return <h2 style={generateStyle(4, color, fontFamily)}>{children}</h2>;
    }
    case "h3": {
      return <h3 style={generateStyle(3, color, fontFamily)}>{children}</h3>;
    }
    case "h4": {
      return <h4 style={generateStyle(2, color, fontFamily)}>{children}</h4>;
    }
    case "h5": {
      return <h5 style={generateStyle(2.5, color, fontFamily)}>{children}</h5>;
    }
    default: {
      return <h6 style={generateStyle(1.1, color, fontFamily)}>{children}</h6>;
    }
  }
};

Typography.defaultProps = {
  variant: "b1",
  color: "var(--secondary)",
  align: "left",
};

export default Typography;
