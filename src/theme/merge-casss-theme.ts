import { deepMerge } from './deepMerge';
import { validateCassTheme } from './validateCassTheme';
import { CassTheme, CassThemeOverride } from '../theme.types';

export function mergeCassTheme(
  baseTheme: CassTheme,
  themeOverride?: CassThemeOverride
): CassTheme {
  if (!themeOverride) {
    validateCassTheme(baseTheme);
    return baseTheme;
  }

  const mergedTheme = deepMerge(baseTheme, themeOverride);

  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    mergedTheme.headings.fontFamily = themeOverride.fontFamily;
  }

  validateCassTheme(mergedTheme);
  return mergedTheme;
}
