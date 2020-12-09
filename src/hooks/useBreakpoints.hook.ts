import { useState, useEffect } from "react";

const getDeviceConfig = (width: number) => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  }
};
const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<{
    width: number;
    height: number;
    breakpoint?: "xs" | "sm" | "md" | "lg";
  }>({ width: 0, height: 0, breakpoint: undefined });

  useEffect(() => {
    const calcInnerWidth = function () {
      setBrkPnt({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getDeviceConfig(window.innerWidth),
      });
    };
    window.addEventListener("resize", calcInnerWidth);
    calcInnerWidth();
    return () => {
      window.removeEventListener("resize", calcInnerWidth);
    };
  }, []);

  return brkPnt;
};
export default useBreakpoint;
