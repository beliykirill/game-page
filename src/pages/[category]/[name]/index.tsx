import { FC } from 'react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { Main } from 'widgets/main';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
});

const CategoryNamePage: FC = () => {
  const [t] = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />

        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <Main />

      <Footer />
    </>
  );
};

export default CategoryNamePage;
