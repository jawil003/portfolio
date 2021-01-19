import DesignSystem, {
  System,
  pxTo,
} from "design-system-utils";
const designTokens: System = {
  type: {
    baseFontSize: "16px",
  },
  colors: {
    colorPalette: {
      white: {
        base: "#f3f3f3",
        dark: "#f0f0f0",
      },
      grey: {
        light: "rgb(247, 247, 247)",
        lightdark: "rgb(172, 171, 171)",
      },
      red: { base: "red" },
      orange: { base: "#e67e22" },
      blue: {
        base: "#00739d",
        dark: "#165c6f",
        darklight: "#2d6c7d",
        light: "#d0dee2",
      },
      green: { base: "#28b463" },
      yellow: { base: "#f4d03f" },
      black: { base: "#000" },
    },
    brand: {
      primary: "#f3f3f3", // white
      secondary: "#00739d", // blue
      secondaryText: "#000", // black
    },
  },
  fontFamily: {
    base:
      "'Source Sans Pro', sans-serif",
  },
  fontWeight: {
    lighter: 200,
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    bolder: 900,
  },
  breakpoints: {
    phoneOnly: "599px",
    tabletPortraitUp: "600px",
    tabletLandscapeUp: "900px",
    desktopUp: "1200px",
    bigDesktopUp: "1800px",
  },
};
const designSystem = new DesignSystem(
  designTokens,
  { fontSizeUnit: "rem" },
);

export const fontSizeToRelativeValue = (
  fontSizePx: string,
) =>
  pxTo(
    fontSizePx,
    designSystem.get(
      "type.fontSizeBase",
    ),
    "rem",
  );

export default designSystem;
