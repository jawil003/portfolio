import { useContext } from "react";
import DesktopNavigationBarContext from "../components/contexts/DesktopNavigationBarContext";

const useDesktopNavigationBarContext = () =>
  useContext(
    DesktopNavigationBarContext,
  );

export default useDesktopNavigationBarContext;
