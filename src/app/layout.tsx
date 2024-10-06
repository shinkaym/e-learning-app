import type { Metadata } from "next";
import "./globals.css";
import { dm_sans, manrope, roboto } from '@/components/font';

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng lập trình trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} ${manrope.variable} ${roboto.variable}}`}
      >
        {children}
      </body>
    </html>
  );
}
