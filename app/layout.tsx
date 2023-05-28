import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { generalQuery } from '@/api/queries/general';
import { ApolloWrapper } from '@/lib/graphql/apollo-client';
import { client } from '@/lib/graphql/apollo-server';

export const dynamic = 'force-dynamic';

interface RootLayoutProps {
  children: React.ReactNode;
  pageProps: any;
}

export default async function Layout({ children }: RootLayoutProps) {
  const {
    data: {
      general: {
        data: {
          attributes: { mainNavigation, logo, footer },
        },
      },
    },
  } = await client.query({ query: generalQuery });

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-sk-light font-sans text-accent-200 antialiased dark:bg-sk-dark dark:text-accent-800',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ApolloWrapper>
            <main className="flex min-h-screen flex-col">
              <Header logoData={logo} navigationData={mainNavigation} />
              <div className="flex-1">{children}</div>
              <Footer logoData={logo} footerData={footer} />
            </main>
            <Script
              src="https://connect.facebook.net/en_US/sdk.js"
              strategy="lazyOnload"
            />
            <Script
              strategy="lazyOnload"
              src="https://platform.twitter.com/widgets.js"
            />
          </ApolloWrapper>
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
