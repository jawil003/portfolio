import React from "react";
import { viewportContext } from "../contexts/viewport-provider";

export const useViewport = (
  noContext = false,
  initialSize = false,
) => {
  if (noContext) {
    const [
      width,
      setWidth,
    ] = React.useState(0);
    const [
      height,
      setHeight,
    ] = React.useState(0);
    const handleWindowResize = () => {
      if (initialSize) {
        setWidth((oldWidth) =>
          window.innerWidth > oldWidth
            ? window.innerWidth
            : oldWidth,
        );
        setHeight((oldHeight) =>
          window.innerHeight > oldHeight
            ? window.innerHeight
            : oldHeight,
        );
      } else {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }
    };
    React.useEffect(() => {
      handleWindowResize();
      window.addEventListener(
        "resize",
        handleWindowResize,
      );
      return () =>
        window.removeEventListener(
          "resize",
          handleWindowResize,
        );
    }, []);
    return { width, height };
  }
  const {
    width,
    height,
  } = React.useContext(viewportContext);
  return { width, height };
};
