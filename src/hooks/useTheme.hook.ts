import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeProvider";
import ThemeContextType from "../types/ThemeContext.type";

const useTheme = () => useContext<ThemeContextType>(ThemeContext);
export default useTheme;
