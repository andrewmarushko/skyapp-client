import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/theme-provider";
import Navbar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body
        className={cn("min-h-screen bg-slate-50 dark:bg-slate-900 antialiased")}
      >
        <Providers>
          {/*  WARN: delete this ingnore when ts-support will be available or move into ts-config  */}
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
        </Providers>
        {/* INFO: Allow for more height on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
