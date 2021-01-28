import React, { useState } from "react";

const initialState = {
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpen: () => {
    return;
  },
};

export const DesktopNavigationBarContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>(initialState);

/**
 * An DesktopNavigationBarContext React Component.
 * @author Jannik Will
 * @version 0.1
 */
const DesktopNavigationBarContextElement: React.FC = ({
  children,
}) => {
  const [
    context,
    setContext,
  ] = useState({
    open: initialState.open,
  });
  return (
    <DesktopNavigationBarContext.Provider
      value={{
        open: context.open,
        setOpen: (open: boolean) =>
          setContext({ open }),
      }}
    >
      {children}
    </DesktopNavigationBarContext.Provider>
  );
};

export default DesktopNavigationBarContextElement;
