import { ButtonHTMLAttributes, FC } from 'react';
import { MainText } from 'shared/ui/typography';
import { Container } from './styled';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'default' | 'medium' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTheme?: ButtonTheme;
  buttonSize?: ButtonSize;
  isActive?: boolean;
}

export const Button: FC<ButtonProps> = ({
  buttonTheme = 'default',
  buttonSize = 'default',
  isActive = false,
  children,
  ...props
}) => {
  return (
    <Container
      $buttonTheme={buttonTheme}
      $buttonSize={buttonSize}
      $isActive={isActive}
      {...props}
    >
      <MainText $textTheme="medium">{children}</MainText>
    </Container>
  );
};
