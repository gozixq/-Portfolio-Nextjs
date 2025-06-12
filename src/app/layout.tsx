import Script from 'next/script';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import SplashCursor from './components/ui/SplashCursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Awesome app using Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X461P4X823"
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X461P4X823');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${poppins.className} font-sans`}>
        <SplashCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
