import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from 'entities/modal';
import { isDevelopment } from 'shared/lib/helpers';

export const rootReducer = combineReducers({
  modal: modalReducer,
});

const middlewares: unknown[] = [];

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createLogger } = require('redux-logger');

  const logger = createLogger({
    collapsed: true,
  });

  if (!process.env.NEXT_RUNTIME) {
    middlewares.unshift(logger);
  }
}

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: isDevelopment,
    // @ts-expect-error: Hydrate generate problem
    middleware: (getDefaultMiddleware) => {
      if (!isDevelopment) return getDefaultMiddleware();

      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...middlewares);
    },
  });

export const storeWrapper = createWrapper(makeStore);
