import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { getClient } from '@/lib/graphql/apollo';
import { generalQuery } from '@/api/queries/general';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  const client = getClient();

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
          'min-h-screen bg-sk-light font-sans text-stone-900 antialiased dark:bg-sk-dark dark:text-stone-50',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen flex-col">
            <Header logoData={logo} navigationData={mainNavigation} />
            <div className="flex-1">{children}</div>
            <Footer logoData={logo} footerData={footer} />
          </main>
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
