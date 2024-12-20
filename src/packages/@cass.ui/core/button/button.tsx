import React from "react";
import { CassColor, CassSize } from "../src/core/cass-provider/theme.types";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  "data-disabled"?: boolean;

  /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
  size?: CassSize | `compact-${CassSize}` | (string & {});

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: CassColor;

  /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
  justify?: React.CSSProperties["justifyContent"];

  /** Content displayed on the left side of the button label */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the button label */
  rightSection?: React.ReactNode;

  /** Determines whether button should take 100% width of its parent container, `false` by default */
  fullWidth?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Indicates disabled state */
  disabled?: boolean;

  /** Button content */
  children?: React.ReactNode;

  /** Determines whether the `Loader` component should be displayed over the button */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

const button = () => {
  return <button>button</button>;
};

export default button;
