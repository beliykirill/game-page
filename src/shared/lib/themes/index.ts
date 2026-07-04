import type { DefaultTheme } from 'styled-components';

export const color =
  (name: keyof DefaultTheme) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme[name];

export { theme } from './theme';
