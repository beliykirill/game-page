import { FC, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useDebounce, useFirstRun } from 'shared/lib/hooks';

export const SubmitOnChange: FC<{ delay?: number }> = ({ delay = 250 }) => {
  const isFirstRun = useFirstRun();
  const { values, handleSubmit } = useFormikContext<object>();

  const debouncedValue = useDebounce(values, delay);

  useEffect(() => {
    if (isFirstRun) {
      return;
    }

    handleSubmit();
  }, [debouncedValue]);

  return null;
};
