import React, { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  primaryColor?: string;
  secondaryColor?: string;
  borderRadius?: string;
}

const ThemeContext = createContext<ThemeContextType>({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
  ...customTheme
}: { children: ReactNode } & ThemeContextType) => {
  return (
    <ThemeContext.Provider value={customTheme}>
      <div
        style={
          {
            // Apply theme values as CSS variables
            "--primary-color":
              customTheme.primaryColor || "var(--primary-color)",
            "--secondary-color":
              customTheme.secondaryColor || "var(--secondary-color)",
            "--border-radius":
              customTheme.borderRadius || "var(--border-radius)",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
