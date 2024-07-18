// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sai's Portfolio",
  description: 'A stunning 3D portfolio showcasing my projects and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
