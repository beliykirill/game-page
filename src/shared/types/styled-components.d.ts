import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    surfaceBackground: string;
    surfaceMain: string;
    surfaceBorder: string;

    textMain: string;
    textPlaceholder: string;
    textPrimary: string;
    textLabel: string;
  }
}
