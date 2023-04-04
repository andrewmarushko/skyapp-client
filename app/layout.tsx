import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-foreground font-sans text-accent-1 antialiased dark:bg-background dark:text-accent-5 md:subpixel-antialiased',
            fontSans.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="container flex-1">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
          <Analytics />
          <Toaster />
        </body>
      </html>
    </>
  );
}
