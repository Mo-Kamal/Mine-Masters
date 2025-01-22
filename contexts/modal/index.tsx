"use client";
import React, { Dispatch, SetStateAction } from "react";

interface ModalContextType {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined
);
