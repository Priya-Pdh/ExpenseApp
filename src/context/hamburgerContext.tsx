import React, { useContext, useState } from 'react';

type HamburgerProviderProps = {
  children: React.ReactNode;
};

export type HamburgerContextProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HamburgerContext = React.createContext({} as HamburgerContextProps);

export function useHamburgerContext() {
  return useContext(HamburgerContext);
}

export function HamburgerProvider({ children }: HamburgerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HamburgerContext.Provider value={{ isOpen, setIsOpen }}>{children}</HamburgerContext.Provider>
  );
}
