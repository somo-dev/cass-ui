import React, { FC } from "react";
import "./loader.css";

type LoaderType = "ring" | "dots";

interface LoaderProps {
  size?: number;
  type?: LoaderType;
}

const Loader: FC<LoaderProps> = ({ size = 20, type = "ring" }) => {
  const loaderStyle = {
    "--loader-size": `${size}px`,
  } as React.CSSProperties;

  return (
    <div style={loaderStyle}>
      {type === "ring" ? (
        <div className="loader-ring" />
      ) : (
        <div className="loader-dots">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Loader;
