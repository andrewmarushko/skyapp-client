import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import {
  getFooterData,
  getLogoData,
  getNavigationData,
} from '@/api-service/general';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  const logoResponse = getLogoData();
  const navigationMenuResponse = getNavigationData();
  const footerResponse = getFooterData();

  const [logoData, navigationMenuData, footerData] = await Promise.all([
    logoResponse,
    navigationMenuResponse,
    footerResponse,
  ]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-sk-light font-sans text-stone-900 antialiased dark:bg-sk-dark dark:text-stone-50',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen flex-col">
            <Header logoData={logoData} navigationData={navigationMenuData} />
            <div className="flex-1">{children}</div>
            <Footer logoData={logoData} footerData={footerData} />
          </main>
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
