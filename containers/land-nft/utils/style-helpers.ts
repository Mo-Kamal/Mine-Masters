import { capitalizeString } from "@/utils/capitalize-string";
import { BREAKPOINT_QUERIES, ROATION_ORDER } from "../constants";
import { BreakpointSizes, ImageSize, Position } from "../types";

// Helper function to create position mappings for an image based on size and responsiveness
const createPositions = (
  size: ImageSize,
  isResponsive: boolean = false,
): Record<Position, Record<string, string>> => ({
  top: {
    // For the "top" position, place the image at the top of the viewport, centered horizontally
    top: isResponsive ? "0px" : "70px",
    right: `calc(50% - ${size.width / 2}px)`,
  },
  right: {
    // For the "right" position, align it vertically centered on the right side
    right: "20px",
    top: `calc(50% - ${size.height / 2}px)`,
  },
  bottom: {
    // For the "bottom" position, place the image at the bottom of the viewport, centered horizontally
    top: isResponsive
      ? `calc(100% - ${size.height * 1.2}px)`
      : `calc(100% - ${size.height * 1.4}px)`,
    right: `calc(50% - ${size.width / 2}px)`,
  },
  left: {
    // For the "left" position, align it vertically centered on the left side
    top: `calc(50% - ${size.height / 2}px)`,
    right: `calc(100% - ${size.width}px)`,
  },
});

// Function to generate CSS keyframes for rotating an image between positions
export const generateKeyframes = (
  position: Position, // Starting position
  size: ImageSize, // Dimensions of the image
  isResponsive: boolean = false, // Whether to use responsive positions
): string => {
  const positions = createPositions(size, isResponsive); // Get positions based on size
  const positionIndex = ROATION_ORDER.indexOf(position); // Find the index of the current position

  return `
      @keyframes ${`rotateImage${capitalizeString(position)}`} {
        ${ROATION_ORDER.map((_, i) => {
          // Loop through all positions in the rotation order
          const nextIndex = (positionIndex + i) % ROATION_ORDER.length; // Get the next position index
          return `
            ${i * 20}%, ${(i + 1) * 20}% {
              ${Object.entries(positions[ROATION_ORDER[nextIndex]])
                .map(([key, value]) => `${key}: ${value};`) // Convert positions into CSS properties
                .join("\n            ")}
            }
          `;
        }).join("\n")}
        80%, 100% {
          // Ensure the animation ends back at the original position
          ${Object.entries(positions[ROATION_ORDER[positionIndex]])
            .map(([key, value]) => `${key}: ${value};`)
            .join("\n        ")}
        }
      }
    `;
};

export // Function to generate responsive styles and animations for each breakpoint
const generateResponsiveStyles = (
  position: Position, // Position of the image
  breakpoints: Record<string, ImageSize>, // Breakpoint sizes
): string =>
  Object.entries(breakpoints) // Iterate over each breakpoint
    .map(([breakpoint, size]) => {
      const keyframes = generateKeyframes(position, size, true); // Generate responsive keyframes
      return `
        ${BREAKPOINT_QUERIES[breakpoint as keyof BreakpointSizes]} {
          width: ${size.width}px;
          height: ${size.height}px;
          ${keyframes}
        }
      `;
    })
    .join("\n");
