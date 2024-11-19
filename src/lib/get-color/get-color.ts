import { ButtonVariant } from "@/core/compoennts/test-button/button";
import { CSSProperties } from "react";

const predefinedColors = ["blue", "orange", "teal", "violet", "gray", "black"];

export const getColour = (
  color: string,
  variant: ButtonVariant
): CSSProperties => {
  const isRgb = /^rgb\((\s*\d+\s*,){2}\s*\d+\s*\)$/.test(color);

  if (isRgb) {
    // Extract RGB values from the color
    const rgbValues = color.slice(4, -1).trim();
    const hoverAlpha = variant === "subtle" ? 0.12 : 0.05;

    return {
      backgroundColor: `rgba(${rgbValues}, 0.1)`,
      "--hover-color": `rgba(${rgbValues}, ${hoverAlpha})`,
    } as CSSProperties;
  }

  // If the color is not a valid `rgb` string, treat it as a predefined theme color
  if (predefinedColors.includes(color)) {
    const colorSuffix = variant === "solid" ? "solid" : "light";
    const hoverSuffix = variant === "solid" ? "solid-hover" : "light-hover";

    return {
      backgroundColor: `var(--color-${color}-${colorSuffix})`,
      "--hover-color": `var(--color-${color}-${hoverSuffix})`,
    } as CSSProperties;
  }

  // Fallback for unsupported colors
  console.warn(`Unsupported color: ${color}. Falling back to default.`);
  return {
    backgroundColor: "var(--color-blue-light)",
    "--hover-color": "var(--color-blue-light-hover)",
  } as CSSProperties;
};
