import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://portfolio.minto312.com';
const siteTitle = '高島 湊斗 – ポートフォリオ';
const siteDescription =
  '高島 湊斗 (Takashima Minato) のポートフォリオサイトです。TypeScriptとGo, Pythonを中心にフルスタックからインフラまで幅広く開発を行っています。';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    '高島湊斗',
    'Takashima Minato',
    'ポートフォリオ',
    'フルスタックエンジニア',
    'Python エンジニア',
    'TypeScript エンジニア',
    'Next.js',
  ],
  authors: [{ name: '高島 湊斗', url: siteUrl }],
  creator: '高島 湊斗',
  publisher: '高島 湊斗',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/icon.png`,
        width: 512,
        height: 512,
        alt: '高島 湊斗のプロフィールアイコン',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@Minto3219_',
    images: [`${siteUrl}/icon.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-a1hS2j+cqIt6GQGqUVxQpZK0s8AjtKoa6HgMHqYjgJv1bVbWcv16O3EOai9nEGBWeItPxX2SOi59V6M7z0Yf0A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
