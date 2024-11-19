import {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
  CSSProperties,
  useMemo,
} from "react";
import "./button.css";
import Loader from "../loader/loader";
import { resolveProps } from "@/lib/utils/resolver";
import { useTheme } from "@/theme/theme-provider/theme-provider";
import { CassElementSizeValues, CassSize } from "@/core/theme.types";
import { useLoaderTransition } from "./use-loader-transition";
import LoaderTransition from "./loader-transition";
import { getColour } from "@/lib/get-color/get-color";

// Button variants
type ButtonVariant =
  | "solid"
  | "outline"
  | "glow"
  | "subtle"
  | "ghost"
  | "white";

// Button props interface
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

// Default props
const defaultProps: ButtonProps = {
  variant: "solid",
  size: "md",
  fullwidth: false,
  rounded: false,
  justify: "center",
  isLoading: false,
  color: "blue",
};

// Utility for class names
const classNames = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// Size configurations
const sizeConfig: Record<CassSize, CSSProperties> = {
  xs: { minWidth: "var(--button-width-xs)", height: "var(--button-height-xs)" },
  sm: { minWidth: "var(--button-width-sm)", height: "var(--button-height-sm)" },
  md: { minWidth: "var(--button-width-md)", height: "var(--button-height-md)" },
  lg: { minWidth: "var(--button-width-lg)", height: "var(--button-height-lg)" },
  xl: { minWidth: "var(--button-width-xl)", height: "var(--button-height-xl)" },
};

// Resolve button size
const resolveButtonSize = (size: CassSize | number): CSSProperties => {
  return typeof size === "number"
    ? { width: `${size}px`, height: `${size / 2.5}px`, padding: "0 16px" }
    : { ...sizeConfig[size as CassSize], padding: "0 16px" };
};

// Button component
const Button: FC<Partial<ButtonProps>> = ({ children, ...userProps }) => {
  // Resolve props using resolveProps
  const props = useMemo(
    () => resolveProps(userProps, defaultProps),
    [userProps]
  );

  const theme = useTheme();
  const transitionState = useLoaderTransition(props.isLoading!);

  const buttonClass = classNames(
    "button",
    `button-${props.variant}`,
    `justify-${props.justify}`,
    props.fullwidth && "button-fullwidth",
    props.rounded && "button-rounded"
  );

  const resolvedSize = useMemo(
    () => resolveButtonSize(props.size!),
    [props.size]
  );

  const colorStyles = useMemo(
    () => getColour(props.color || "blue", props.variant!),
    [props.color, props.variant]
  );

  return (
    <button
      {...props}
      className={buttonClass}
      style={{
        ...resolvedSize,
        ...colorStyles,
        borderRadius: props.rounded ? "9999px" : "var(--border-radius)",
        justifyContent: props.justify,
        display: "flex",
        alignItems: "center",
      }}
      disabled={props.disabled || props.isLoading}
      data-variant={props.variant}
      data-size={props.size}
      data-loading={props.isLoading}
      data-fullwidth={props.fullwidth}
    >
      {props.leftSection && (
        <span className="button-section left">{props.leftSection}</span>
      )}

      <span className="button-content">
        {props.isLoading || transitionState !== "exited" ? (
          <LoaderTransition transitionState={transitionState}>
            <span
              className="loading-text"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Loader type="dots" /> {props.loadingText}
            </span>
          </LoaderTransition>
        ) : (
          children
        )}
      </span>

      {props.rightSection && (
        <span className="button-section right">{props.rightSection}</span>
      )}
    </button>
  );
};

export default Button;
