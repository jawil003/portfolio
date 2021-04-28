const designSystem = {
  font: {
    base: {
      size: "16px",
      family: {
        base: "'Source Sans Pro'",
        paragraph: "'Source Sans Pro'",
        title: "'Source Sans Pro'",
        fallback: "Arial, Helvetica",
      },
    },
    fontWeight: {
      lighter: 200,
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
      bolder: 900,
    },
  },
  colors: {
    palette: {
      white: {
        base: "#f3f3f3",
        dark: "#f0f0f0",
      },
      grey: {
        light: "rgb(247, 247, 247)",
        lightdark: "rgb(172, 171, 171)",
        dark: "#444C4C",
      },
      red: { base: "red" },
      orange: { base: "#e67e22" },
      blue: {
        base: "#00739d",
        dark: "#165c6f",
        darklight: "#2d6c7d",
        light: "#d0dee2",
      },
      green: {
        base: "#28b463",
        dark: "#006F4C",
      },
      yellow: { base: "#f4d03f" },
      black: { base: "#000" },
      brown: { base: "#A23F40" },
    },
    brand: {
      primary: "#f3f3f3", // white
      secondary: "#00739d", // blue
      secondaryText: "#000", // black
    },
  },
  breakpoints: {
    phoneOnly: "599px",
    phoneOnlyNumber: 599,
    tabletPortraitUp: "600px",
    tabletPortraitUpNumber: 600,
    tabletLandscapeUp: "900px",
    tabletLandscapeUpNumber: 900,
    desktopUp: "1200px",
    desktopUpNumber: 1200,
    bigDesktopUp: "1800px",
    bigDesktopUpNumber: 1800,
  },
  positioning: {
    behindBehindBehindFirst: 997,
    behindBehindFirst: 998,
    behindFirst: 999,
    first: 1000,
  },
};

export default designSystem;

export const fontSizeToRelativeValue = (
  fontSizePx: string,
) => {
  const fontSize = Number(
    fontSizePx.slice(
      0,
      fontSizePx.length - 2,
    ),
  );

  return `${
    (1 /
      Number(
        designSystem.font.base.size.slice(
          0,
          fontSizePx.length - 2,
        ),
      )) *
    fontSize
  }rem`;
};
