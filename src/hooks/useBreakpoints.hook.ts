import { useState, useEffect } from "react";

export const breakpoints = { sm: 400, md: 780, lg: 1100 };

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    const calcInnerWidth = function () {
      setBrkPnt({
        width: window.innerWidth,
        height: window.innerHeight,
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
