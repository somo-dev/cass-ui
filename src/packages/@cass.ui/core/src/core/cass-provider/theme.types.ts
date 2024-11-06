export type CassSize = "xs" | "sm" | "md" | "lg" | "xl";

export type CassBreakpointsValues = Record<CassSize | (string & {}), string>;
export type CassSpacingValues = Record<CassSize | (string & {}), string>;
export type CassFontSizeValues = Record<CassSize | (string & {}), string>;
export type CassLineHeightValues = Record<CassSize | (string & {}), string>;

export type CassSpacing = keyof CassSpacingValues | number;
export type CassBreakpoint = keyof CassBreakpointsValues;
export type CassFontSize = keyof CassFontSizeValues | number;
export type CassLineHeight = keyof CassLineHeightValues | number;

export type CassColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[]
];

export type DefaultCassColors =
  | "dark"
  | "silver"
  | "red"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "lime"
  | "orange"
  | "teal"
  | (string & {});

export type CassThemeColorsOverride = {};

export type CassThemeColors = CassThemeColorsOverride extends {
  colors: Record<infer CustomColors, CassColorsTuple>;
}
  ? Record<CustomColors, CassColorsTuple>
  : Record<DefaultCassColors, CassColorsTuple>;

export type CassColor = keyof CassThemeColors;
