import Theme from "./Theme.type";

type ThemeContext = Theme & {
  setDarkTheme: () => void;
  setLightTheme: () => void;
};
export default ThemeContext;
