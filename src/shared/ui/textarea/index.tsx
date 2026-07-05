import { ChangeEvent, FC, FocusEvent, TextareaHTMLAttributes } from 'react';
import { useField, useFormikContext } from 'formik';
import { MainText } from 'shared/ui/typography';
import {
  Container,
  Counter,
  Footer,
  Layout,
  ResizeIcon,
  TextArea,
} from './styled';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  maxLength?: number;
}

export const TextAreaField: FC<Props> = ({
  name,
  label,
  maxLength = 200,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const { validateField } = useFormikContext();

  const value: string = field.value ?? '';

  const handleChangeValue = (changeEvent: ChangeEvent<HTMLTextAreaElement>) => {
    if (typeof props.onChange === 'function') {
      props.onChange(changeEvent);
    }

    field.onChange(changeEvent);

    if (!meta.touched && changeEvent.target.value.length > 0) {
      validateField(name).then(() => {
        helpers.setTouched(true);
      });
    }
  };

  const onBlur = (focusEvent: FocusEvent<HTMLTextAreaElement>) => {
    if (typeof props.onBlur === 'function') {
      props.onBlur(focusEvent);
    }

    return field.onBlur(focusEvent);
  };

  return (
    <Layout>
      {label && <MainText>{label}</MainText>}

      <Container className="textarea-container">
        <TextArea
          {...props}
          {...field}
          value={value}
          maxLength={maxLength}
          onChange={handleChangeValue}
          onBlur={onBlur}
        />

        <Footer>
          <Counter>
            {value.length}/{maxLength}
          </Counter>

          <ResizeIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M10.5 4.5 4.5 10.5M10.5 8.5 8.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </ResizeIcon>
        </Footer>
      </Container>
    </Layout>
  );
};
