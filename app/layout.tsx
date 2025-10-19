import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: '高島 湊斗 – ポートフォリオ',
  description:
    '高島 湊斗 (Takashima Minato) のポートフォリオサイトです。PythonとTypeScriptを中心にフルスタック開発を行っています。',
  icons: {
    icon: '/icon.png',
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
