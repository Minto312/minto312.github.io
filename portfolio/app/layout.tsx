import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio - Minto312',
  description: '高島湊斗のポートフォリオサイトです。Webアプリケーション開発や情報セキュリティに関するスキル、プロジェクト実績を紹介しています。',
  keywords: '高島湊斗, Takashima Minato, ポートフォリオ, Webデベロッパー, フルスタックエンジニア, Python, TypeScript, Next.js, 情報処理安全確保支援士',
  authors: [{ name: '高島湊斗', url: 'https://minto312.github.io' }], // 著作者情報も追加すると良いかも
  generator: 'Next.js', // generatorはNext.jsが適切かな
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
