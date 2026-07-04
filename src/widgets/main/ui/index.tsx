import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Layout } from './styled';

export const Main: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'main' });

  return <Layout></Layout>;
};
