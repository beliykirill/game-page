import { ChangeEvent, FC, PropsWithChildren } from 'react';
import { useField } from 'formik';
import { MainText } from 'shared/ui/typography';
import { HiddenInput, Section, Container, ThumbIcon, Icon } from './styled';

interface SwitchProps extends PropsWithChildren {
  isChecked: boolean;
  onChange(isChecked: boolean): void;
  prefixIcon?: string;
}

export const Switch: FC<SwitchProps> = ({
  isChecked,
  onChange,
  prefixIcon,
  children,
}) => (
  <Container>
    {prefixIcon && <Icon src={prefixIcon} alt="" />}

    <MainText>{children}</MainText>

    <Section $isChecked={isChecked}>
      <HiddenInput
        type="checkbox"
        checked={isChecked}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.checked)
        }
      />

      <ThumbIcon />
    </Section>
  </Container>
);

interface SwitchFieldProps extends Omit<SwitchProps, 'isChecked' | 'onChange'> {
  name: string;
}

export const SwitchField: FC<SwitchFieldProps> = ({ name, ...props }) => {
  const [field, _, helpers] = useField(name);

  return (
    <Switch isChecked={field.value} onChange={helpers.setValue} {...props} />
  );
};
