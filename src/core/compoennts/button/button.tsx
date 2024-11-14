import { ButtonHTMLAttributes, FC, ReactNode, CSSProperties } from "react";
import "./button.css";
import Loader from "../loader/loader";
import { resolveProps } from "@/lib/utils/resolver";
import { useTheme } from "@/theme/theme-provider/theme-provider";
import { CassElementSizeValues, CassSize } from "@/core/theme.types";
import { useLoaderTransition } from "./use-loader-transition";
import LoaderTransition from "./loader-transition";

type ButtonVariant =
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

const classNames = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const resolveButtonSize = (size: CassSize | number): CSSProperties => {
  const sizeMapping: Record<CassSize, CSSProperties> = {
    xs: { minWidth: "var(--button-width-xs)", height: "var(--button-height-xs)" },
    sm: { minWidth: "var(--button-width-sm)", height: "var(--button-height-sm)" },
    md: { minWidth: "var(--button-width-md)", height: "var(--button-height-md)" },
    lg: { minWidth: "var(--button-width-lg)", height: "var(--button-height-lg)" },
    xl: { minWidth: "var(--button-width-xl)", height: "var(--button-height-xl)" },
  };

  return typeof size === "number"
    ? { width: `${size}px`, height: `${size / 2.5}px`, padding: "0 16px" }
    : { ...sizeMapping[size as CassSize], padding: "0 16px" };
};

const Button: FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  fullwidth = false,
  rounded = false,
  isLoading = false,
  loadingText,
  leftSection,
  rightSection,
  justify = "center",
  disabled,
  children,
  ...userProps
}) => {
  const theme = useTheme();
  const transitionState = useLoaderTransition(isLoading);
  const props = resolveProps({
    variant,
    size,
    fullwidth,
    rounded,
    justify,
    ...userProps,
  });

  const buttonClass = classNames(
    "button",
    `button-${props.variant}`,
    `justify-${props.justify}`,
    props.fullwidth && "button-fullwidth",
    props.rounded && "button-rounded"
  );

  const resolvedSize = resolveButtonSize(props.size);

  return (
    <button
      {...props}
      className={buttonClass}
      style={{
        ...resolvedSize,
        backgroundColor:
          props.variant === "solid" ? theme.primaryColor : "transparent",
        borderRadius: props.rounded ? "9999px" : "var(--border-radius)",
        justifyContent: props.justify,
        display: "flex",
        alignItems: "center",
      }}
      disabled={disabled || isLoading}
    >
      {leftSection && (
        <span className="button-section left">{leftSection}</span>
      )}

      <span className="button-content">
        {isLoading || transitionState !== "exited" ? (
          <LoaderTransition transitionState={transitionState}>
            <span
              className="loading-text"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Loader type="dots" /> {loadingText}
            </span>
          </LoaderTransition>
        ) : (
          children
        )}
      </span>

      {rightSection && (
        <span className="button-section right">{rightSection}</span>
      )}
    </button>
  );
};

export default Button;
