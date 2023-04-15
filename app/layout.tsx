import { Inter } from 'next/font/google';

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
} from '@/api-service/indoor-api';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

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
          'min-h-screen bg-white font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-50',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header logoData={logoData} navigationData={navigationMenuData} />
            <div className="flex-1">{children}</div>
            <Footer footerData={footerData} />
          </div>
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
