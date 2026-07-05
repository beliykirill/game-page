import { ButtonHTMLAttributes, FC } from 'react';
import { DotsLoader } from 'shared/ui/dots-loader';
import { MainText } from 'shared/ui/typography';
import { Container } from './styled';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'default' | 'medium' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTheme?: ButtonTheme;
  buttonSize?: ButtonSize;
  isActive?: boolean;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  buttonTheme = 'default',
  buttonSize = 'default',
  isActive = false,
  isLoading = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <Container
      $buttonTheme={buttonTheme}
      $buttonSize={buttonSize}
      $isActive={isActive}
      disabled={disabled || isLoading}

      {...props}
    >
      <MainText as="span" $textTheme="medium">
        {isLoading ? <DotsLoader /> : children}
      </MainText>
    </Container>
  );
};
