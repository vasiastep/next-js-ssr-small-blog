import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import { store } from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
createWrapper(makeStore);

export default MyApp;
