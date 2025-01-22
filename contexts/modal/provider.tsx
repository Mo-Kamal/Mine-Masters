"use client";
import { ReactNode, useState } from "react";
import { ModalContext } from ".";

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { Provider } = ModalContext;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <Provider value={{ isDrawerOpen, setIsDrawerOpen }}>{children}</Provider>
  );
};

export default ModalProvider;
