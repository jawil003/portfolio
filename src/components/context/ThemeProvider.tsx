import React, { useState } from "react";
import Theme from "src/types/Theme.type";
import LightTheme from "../../themes/light.json";
import DarkTheme from "../../themes/light.json";
import ThemeContextType from "../../types/ThemeContext.type";

export const ThemeContext = React.createContext<ThemeContextType>({} as any);

interface Props {}

/**
 * An ThemeProvider React Component.
 * @author
 * @version 0.1
 */
const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(LightTheme);
  return (
    <ThemeContext.Provider
      value={{
        ...theme,
        setDarkTheme: () => setTheme(DarkTheme),
        setLightTheme: () => setTheme(LightTheme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
