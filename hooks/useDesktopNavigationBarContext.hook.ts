import { useContext } from "react";
import DesktopNavigationBarContext from "../contexts/DesktopNavigationBarContext";

const useDesktopNavigationBarContext = () =>
  useContext(
    DesktopNavigationBarContext,
  );

export default useDesktopNavigationBarContext;
