import { ButtonHTMLAttributes, FC } from 'react';
import { MainText } from 'shared/ui';
import { Container } from './styled';

export type ButtonTheme = 'default' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTheme?: ButtonTheme;
  buttonSize?: 'default' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  buttonTheme = 'default',
  buttonSize = 'default',
  children,
  ...props
}) => {
  return (
    <Container $buttonTheme={buttonTheme} {...props}>
      <MainText>{children}</MainText>
    </Container>
  );
};
