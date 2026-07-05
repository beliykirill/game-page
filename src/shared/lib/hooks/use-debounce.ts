import { useEffect, useState } from 'react';

function useDebounce(value: object | number, delay = 250) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const updateTimeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(updateTimeout);
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
