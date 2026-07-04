import { FC } from 'react';

const SITE_URL = 'https://starvell.com';

export const Canonical: FC<{ asPath: string }> = ({ asPath }) => {
  const path = asPath === '/' ? '' : asPath.split('?')[0];

  return <link rel="canonical" href={`${SITE_URL}${path}`} />;
};
