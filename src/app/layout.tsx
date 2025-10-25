import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebsiteLoader from '@/components/WebsiteLoader';

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
      <body>
        <WebsiteLoader>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </WebsiteLoader>
      </body>
    </html>
  );
}
