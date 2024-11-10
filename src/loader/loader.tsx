import React from "react";

interface LoaderProps {
  size?: number;
  color?: string;
  speed?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = 20,
  color = "#000",
  speed = "0.6s",
}) => (
  <div
    style={{
      width: size,
      height: size,
      border: `2px solid ${color}`,
      borderTopColor: "transparent", // Creates a partial border effect
      borderRadius: "50%",
      animation: `spin ${speed} linear infinite`,
    }}
  />
);

// Add keyframes as a global style
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Insert the keyframes into the document's first stylesheet
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Loader;
