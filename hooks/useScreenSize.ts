"use client";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const [innerHeight, setInnerHeight] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    function handleWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setInnerWidth(width);
      setInnerHeight(height);
      setIsMobile(width < BREAKPOINTS.sm);
    }

    // Set initial values on the client
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { innerHeight, innerWidth, isMobile };
};
