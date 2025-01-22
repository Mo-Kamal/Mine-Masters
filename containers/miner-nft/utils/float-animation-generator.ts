import { keyframes } from "@/lib/mui";
// Define a dynamic keyframes function
export const moveAnimation = (changeValue: number) => keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(${changeValue}%, -50%); }
  100% { transform: translate(0, 0); }
  `;
