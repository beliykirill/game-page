import { FC } from 'react';
import { flip, shift, size } from '@floating-ui/react';
import { offset as offsetMiddleware } from '@floating-ui/react-dom';
import { useField } from 'formik';
import { FloatingPopup } from 'shared/lib/floating-popup';
import { IOption, Nullable } from 'shared/types/global';
import { PopupContainer, PopupItem } from 'shared/ui/popup';
import { MainText } from 'shared/ui/typography';
import { Container, Layout } from './styled';

interface SelectProps {
  value: Nullable<string>;
  options: IOption[];
  label?: string;
  placeholder?: string;
  selectSize?: 'default' | 'secondary';
  onSelect(value: string): void;
}

export const Select: FC<SelectProps> = ({
  value,
  options,
  label,
  placeholder,
  selectSize = 'default',
  onSelect,
}) => {
  const currentOption = options.find((option) => option.value === value)!;

  return (
    <FloatingPopup
      manageFocus
      options={{
        middleware: [
          offsetMiddleware(8),
          flip(),
          shift({ padding: 8 }),
          size({
            apply({ rects, elements }) {
              elements.floating.style.width = `${rects.reference.width}px`;
            },
          }),
        ],
        placement: 'bottom',
      }}
      popup={({ onClose }) => (
        <PopupContainer>
          {options.map((option) => (
            <PopupItem
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                onClose();
              }}
            >
              <MainText>{option.label}</MainText>
            </PopupItem>
          ))}
        </PopupContainer>
      )}
    >
      {(isOpen, handleChangeViewState) => (
        <Layout
          $selectSize={selectSize}
          $hasValue={Boolean(currentOption?.value)}
        >
          {label && <MainText>{label}</MainText>}

          <Container $isOpen={isOpen} onClick={handleChangeViewState}>
            <MainText>{currentOption?.label || placeholder}</MainText>

            <img src="/static/images/common/arrows/chevron.svg" alt="" />
          </Container>
        </Layout>
      )}
    </FloatingPopup>
  );
};

interface SelectFieldProps extends Omit<SelectProps, 'value' | 'onSelect'> {
  name: string;
}

export const SelectField: FC<SelectFieldProps> = ({ name, ...props }) => {
  const [field, _, helpers] = useField(name);

  return <Select value={field.value} onSelect={helpers.setValue} {...props} />;
};
