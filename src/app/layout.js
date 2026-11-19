import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://saichandras.github.io';
const title = 'Sai Chandra | Lead Software Engineer';
const description =
  'Portfolio of Sai Chandra, a Lead Software Engineer building secure enterprise platforms, distributed systems, healthcare technology, and AI-powered analytics.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: '/logo.svg' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Sai Chandra',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
