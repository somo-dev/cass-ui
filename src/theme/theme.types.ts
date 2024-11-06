export interface CassTheme {
  primaryColor: string;
  borderRadius: string;
  spacing: { small: string; medium: string; large: string };
  fontFamily: string;
  // Add other basic properties as needed
}

export type CassThemeOverride = Partial<CassTheme>;
