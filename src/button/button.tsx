import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./button.css";
import Loader from "@/loader/loader";
import { resolveProps, sizeResolver } from "@/lib/utils/prop-resolver";
import { useTheme } from "@/theme/theme-provider/theme-provider";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string | number;
  variant?: "solid" | "outline" | "glow" | "subtle" | "ghost" | "white";
  fullwidth?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  justify?: "start" | "center" | "end" | "space-between";
}

const Button: FC<ButtonProps> = (userProps) => {
  const props = resolveProps(userProps);
  const theme = useTheme();
  const buttonSize = sizeResolver(props.size);

  // Determine class for variant
  const variantClass = `button-${props.variant}`;
  const justifyClass = `justify-${props.justify}`;

  return (
    <button
      {...props}
      className={`button ${variantClass} ${justifyClass} ${
        props.fullwidth ? "button-fullwidth" : ""
      } ${props.rounded ? "button-rounded" : ""}`}
      style={{
        padding: buttonSize,
        backgroundColor:
          props.variant === "solid" ? theme.primaryColor : "transparent",
        borderRadius: props.rounded ? "9999px" : "var(--border-radius)",
        justifyContent: props.justify,
      }}
      disabled={props.disabled || props.isLoading}
    >
      {/* Left Section */}
      {props.leftSection && (
        <span className="button-section left">{props.leftSection}</span>
      )}

      {/* Loading and Content */}
      {props.isLoading ? (
        <span className="loading-text">
          <Loader /> {props.loadingText || "Loading..."}
        </span>
      ) : (
        props.children
      )}

      {/* Right Section */}
      {props.rightSection && (
        <span className="button-section right">{props.rightSection}</span>
      )}
    </button>
  );
};

export default Button;
