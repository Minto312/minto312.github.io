# minto312.github.io

高島 湊斗さんのポートフォリオサイトです。Next.js (App Router) と Tailwind CSS で構築されており、静的エクスポート (`next build`) に対応しています。

## 開発環境のセットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

## 本番ビルド (静的エクスポート)

```bash
npm run build
```

`next.config.ts` で `output: 'export'` を指定しているため、ビルド実行後に `out/` ディレクトリへ静的ファイルが生成されます。そのまま GitHub Pages などへデプロイ可能です。
