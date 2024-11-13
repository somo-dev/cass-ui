// Button.tsx
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./button.css";
import Loader from "../loader/loader";
import { resolveProps } from "@/lib/utils/resolver";
import { useTheme } from "@/theme/theme-provider/theme-provider";
import { CassElementSizeValues, CassSize } from "@/core/theme.types";
import { useLoaderTransition } from "./use-loader-transition";
import LoaderTransition from "./loader-transition";

export type ButtonVariant =
  | "solid"
  | "outline"
  | "glow"
  | "subtle"
  | "ghost"
  | "white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CassSize | CassElementSizeValues | number;
  variant?: ButtonVariant;
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
  isLoading = false,
  loadingText,
  ...userProps
}) => {
  const props = resolveProps({ variant, size, ...userProps });
  const theme = useTheme();
  const transitionState = useLoaderTransition(isLoading);

  const sizeResolver = (size: CassSize | number): string => {
    if (typeof size === "number") {
      return `${size}px`;
    }
    if (typeof size === "string") {
      return `var(--size-${size})`;
    }
    return `var(--size-md)`;
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
      disabled={props.disabled || isLoading}
    >
      {props.leftSection && (
        <span className="button-section left">{props.leftSection}</span>
      )}

      {(isLoading || transitionState !== "exited") && (
        <LoaderTransition transitionState={transitionState}>
          <span className="loading-text">
            <Loader type="dots" /> {loadingText}
          </span>
        </LoaderTransition>
      )}

      {!isLoading && transitionState === "exited" && props.children}

      {props.rightSection && (
        <span className="button-section right">{props.rightSection}</span>
      )}
    </button>
  );
};

export default Button;
