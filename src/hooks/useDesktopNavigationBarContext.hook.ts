import { useContext } from "react";
import { DesktopNavigationBarContext } from "../components/elements/contexts/DesktopNavigationBarContext";

const useDesktopNavigationBarContext = () =>
  useContext(
    DesktopNavigationBarContext,
  );

export default useDesktopNavigationBarContext;
