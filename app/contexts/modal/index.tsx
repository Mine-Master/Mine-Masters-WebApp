"use client";
import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextType {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined
);
const { Provider } = ModalContext;

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <Provider value={{ isDrawerOpen, setIsDrawerOpen }}>{children}</Provider>
  );
};

export { ModalContext, ModalProvider };
