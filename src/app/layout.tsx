import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
// import WebsiteLoader from '@/components/WebsiteLoader';
import { Poppins, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const fontBebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'FastStruct',
  description: 'Modular + Panelized construction, done right.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${fontPoppins.variable} ${fontBebasNeue.variable}`}>
        <Script
          src='https://kit.fontawesome.com/42dfb7600e.js'
          crossOrigin='anonymous'
        />
        {/* <WebsiteLoader> */}
        <Navbar />
        <main className='relative z-0'>{children}</main>
        <Footer />
        {/* </WebsiteLoader> */}
      </body>
    </html>
  );
}
