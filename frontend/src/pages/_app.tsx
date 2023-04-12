import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import GlobalStyle from '@/styles/globalstyles';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import persistReducer from '@/store/modules';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { wrapper } from '@/store';
import * as C from '@/components/styles/commonStyle';
import { useRouter } from 'next/router';

const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});
const persistor = persistStore(store);
const queryClient = new QueryClient()


function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  const router = useRouter();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <PersistGate persistor={persistor} loading={<div>loading...</div>}>
            <GlobalStyle />
            <Head>
              <title>쿠폰발급 시스템</title>
            </Head>
            <C.HeaderBox>
              <C.HeaderTitle>쿠폰발급 시스템</C.HeaderTitle>
              {router.pathname !== '/' &&
                <C.MainPageButton onClick={() => router.push('/')}>처음으로</C.MainPageButton>
              }
            </C.HeaderBox>
            <C.ContentBox>
              <Component {...pageProps} />
            </C.ContentBox>
          </PersistGate>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default App;