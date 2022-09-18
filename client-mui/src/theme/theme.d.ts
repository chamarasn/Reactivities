import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    customStatus: {
      danger: string;
      orange: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    customStatus?: {
      danger?: string;
      orange: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}