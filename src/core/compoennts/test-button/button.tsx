import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CassSize | CassElementSizeValues | number;
  variant?: ButtonVariant;
  fullwidth?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  justify?: "start" | "center" | "end" | "space-between";
}

export type ButtonVariant =
  | "solid"
  | "outline"
  | "glow"
  | "subtle"
  | "ghost"
  | "white";

export type CassSize = "xs" | "sm" | "md" | "lg" | "xl";

export type CassElementSizeValues = Record<CassSize | (string & {}), string>;

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "solid",
  fullwidth = false,
  rounded = false,
  isLoading = false,
  loadingText,
  leftSection,
  rightSection,
  justify = "center",
  children,
  ...props
}) => {
  const loadingMessage = isLoading ? loadingText || "Loading..." : null;

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullwidth ? styles.fullwidth : "",
    rounded ? styles.rounded : "",
    isLoading ? styles.loading : "",
  ].join(" ");

  return (
    <button className={buttonClasses} {...props} disabled={isLoading}>
      {isLoading && leftSection ? leftSection : null}
      {loadingMessage || children}
      {isLoading && rightSection ? rightSection : null}
    </button>
  );
};

export default Button;
