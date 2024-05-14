// Next
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNprogress from 'nextjs-progressbar';

// Translate
import '../i18n';

// Font
import '../../public/fonts/LeagueSpartan.css';

// React
import { useState, useEffect } from 'react';

// React-query
import { QueryClientProvider } from '@tanstack/react-query';

// Styles
import GlobalStyle from '../styles/globals';

// Utils
import { queryClient } from 'utils/querryClient';

// Components
import { Loading } from 'components/loading';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    setLoading(!router.isReady);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, router.isReady]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <NextIntlClientProvider locale={router.locale} timeZone="America/Chicago" messages={pageProps.messages}>
        {loading ? <Loading /> : <Component {...pageProps} />}
        {asPath !== '/' && (
          <NextNprogress
            color='rgba(0, 175, 211, 0.99)'
            startPosition={0}
            stopDelayMs={0}
            height={2}
            showOnShallow={false}
          />
        )}
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
}

export default App;
