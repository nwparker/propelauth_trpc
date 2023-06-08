import { RequiredAuthProvider, useAuthInfo } from '@propelauth/react';
import { AppProps, type AppType } from 'next/app';
import { useEffect } from 'react';
import { env } from '~/env.mjs';
import '~/styles/globals.css';
import { api, setAccessToken } from '~/utils/api';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <RequiredAuthProvider authUrl={env.NEXT_PUBLIC_AUTH_URL}>
      <InnerMostApp
        pageProps={pageProps}
        Component={Component}
        router={router}
      />
    </RequiredAuthProvider>
  );
};

// Nesting so that we have auth here
const InnerMostApp: AppType = ({ Component, pageProps }) => {
  const accessToken = useAuthInfo().accessToken;

  useEffect(() => {
    setAccessToken(accessToken || undefined);
  }, [accessToken]);

  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
