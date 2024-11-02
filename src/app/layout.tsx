import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manhole.gallery'),
  title: {
    default: 'Mahole Gallery, the Pavement Chronicles',
    template: '%s | Manhole Gallery',
  },
  description:
    'Mahole Gallery, the Pavement Chronicles. An image gallery of manhole covers from around the world.',
  applicationName: 'Manhole Gallery',
  creator: 'Callum Bonnyman',
  publisher: 'Manhole Gallery',
  robots: 'index, follow',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: 'https://manhole.gallery/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Manhole',
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
