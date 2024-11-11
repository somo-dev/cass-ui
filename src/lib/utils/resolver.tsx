import { CassElementSizeValues, CassSize } from "@/core/theme.types";

// Default props for all components
const defaultProps = {
  size: "md",
  variant: "filled",
  disabled: false,
};

const resolveProps = (userProps: any, componentDefaults = defaultProps) => {
  return { ...componentDefaults, ...userProps };
};

export { resolveProps };
