import { useEffect, useRef } from 'react';

function useFirstRun() {
  const isFirstRun = useRef(true);

  useEffect(() => {
    isFirstRun.current = false;
  }, []);

  return isFirstRun.current;
}

export { useFirstRun };
