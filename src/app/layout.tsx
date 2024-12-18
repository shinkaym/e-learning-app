import type { Metadata } from 'next';
import "./globals.scss";
import { manrope } from '@/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: 'Ucademy',
  description: 'Nền tảng lập trình trực tuyến',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${manrope.className}`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
            <SpeedInsights />
            <Analytics />
            <ToastContainer autoClose={2000} bodyClassName='text-sm font-medium' position='top-right' />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
