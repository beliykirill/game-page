import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { ModalSystem } from 'features/modal';
import { storeWrapper } from 'entities';
import { usePreserveScroll } from 'shared/lib/hooks';
import { theme } from 'shared/lib/themes';
import { GlobalStyle } from 'shared/ui';
import { Canonical } from 'shared/ui/canonical';
import 'shared/ui/global.css';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { asPath } = rest.router;
  const { store, props } = storeWrapper.useWrappedStore(rest);

  usePreserveScroll();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta charSet="utf-8" />
        <meta name="theme-color" content={theme.surfaceMain} />

        <Canonical asPath={asPath} />
      </Head>

      <StyleSheetManager enableVendorPrefixes>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />

            <ModalSystem />

            <Component {...props.pageProps} />
          </ThemeProvider>
        </Provider>
      </StyleSheetManager>
    </>
  );
};

export default appWithTranslation(App);
