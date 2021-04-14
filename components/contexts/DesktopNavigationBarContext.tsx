import React from "react";

const initialState = {
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOpen: () => {},
};

const DesktopNavigationBarContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>(initialState);

export default DesktopNavigationBarContext;
