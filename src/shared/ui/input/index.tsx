import { ChangeEvent, FC, FocusEvent, InputHTMLAttributes } from 'react';
import { useField, useFormikContext } from 'formik';
import { Container, TextInput, Icon, ErrorText, Field } from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  prefixIcon?: string;
  suffixIcon?: string;
}

export const InputField: FC<Props> = ({
  name,
  prefixIcon,
  suffixIcon,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const { validateField } = useFormikContext();

  const hasError = Boolean(meta.touched && meta.error);

  const handleChangeValue = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    if (
      props.type === 'number' &&
      changeEvent.target.value.length > 0 &&
      !/^\d+$/.test(changeEvent.target.value)
    ) {
      changeEvent.target.value = field.value || '';

      return;
    }

    if (typeof props.onChange === 'function') {
      props.onChange(changeEvent);
    }

    field.onChange(changeEvent);

    if (
      props.type !== 'number' &&
      !meta.touched &&
      changeEvent.target.value.length > 0
    ) {
      validateField(name).then(() => {
        helpers.setTouched(true);
      });
    }
  };

  const onBlur = (focusEvent: FocusEvent<HTMLInputElement>) => {
    if (typeof props.onBlur === 'function') {
      props.onBlur(focusEvent);
    }

    return field.onBlur(focusEvent);
  };

  return (
    <Field className="input-container">
      <Container $hasError={hasError}>
        {prefixIcon && <Icon src={prefixIcon} alt="" />}

        <TextInput
          {...props}
          {...field}
          value={field.value}
          onChange={handleChangeValue}
          onBlur={onBlur}
        />

        {suffixIcon && <Icon src={suffixIcon} alt="" />}
      </Container>

      {hasError && <ErrorText>{meta.error}</ErrorText>}
    </Field>
  );
};
