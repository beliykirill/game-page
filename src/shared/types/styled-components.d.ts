import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    surfaceBackground: string;
    surfaceMain: string;
    surfaceBorder: string;
    surfaceBrand: string;
    surfacePlaceholder: string;
    surfaceSuccess: string;
    surfaceError: string;
    surfaceWarning: string;
    surfaceMedium: string;

    textMain: string;
    textPlaceholder: string;
    textPrimary: string;
    textLabel: string;
    textSecondary: string;
    textBrand: string;
    textSuccess: string;
    textWarning: string;
    textMedium: string;
    textError: string;
  }
}
