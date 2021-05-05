import React from "react";

export const viewportContext = React.createContext<{
  width: number;
  height: number;
}>({ width: 0, height: 0 });

export const ViewportProvider: React.FC = ({
  children,
}) => {
  const [
    width,
    setWidth,
  ] = React.useState(0);
  const [
    height,
    setHeight,
  ] = React.useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
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

  return (
    <viewportContext.Provider
      value={{ width, height }}
    >
      {children}
    </viewportContext.Provider>
  );
};
