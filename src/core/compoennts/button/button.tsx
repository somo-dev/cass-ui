import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./button.css";
import Loader from "@/core/compoennts/loader/loader";
import { resolveProps } from "@/lib/utils/resolver";
import { useTheme } from "@/theme/theme-provider/theme-provider";
import { CassElementSizeValues, CassSize } from "@/core/theme.types";

// Update ButtonProps to accept both string and ResponsiveSize
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CassSize | CassElementSizeValues | number;
  variant?: "solid" | "outline" | "glow" | "subtle" | "ghost" | "white";
  fullwidth?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  justify?: "start" | "center" | "end" | "space-between";
}

const Button: FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  ...userProps
}) => {
  const props = resolveProps({ variant, size, ...userProps });
  const theme = useTheme();
  const sizeResolver = (size: CassSize | number): string => {
    if (typeof size === "number") {
      return `${size}px`;
    }

    if (typeof size === "string") {
      return `var(--size-${size})`; // Use CSS variable
    }

    return `var(--size-md)`; // Default size in case no value is provided
  };
  const buttonSize = sizeResolver(props.size);

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
          <Loader type="dots" /> {props.loadingText || "Loading..."}
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
