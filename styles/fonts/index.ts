import { Ubuntu, Big_Shoulders_Stencil_Text } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const bigShouldersStencilText = Big_Shoulders_Stencil_Text({
  weight: ["900"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});
