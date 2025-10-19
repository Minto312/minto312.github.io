import Image from 'next/image';
import type { ReactNode } from 'react';

const socialLinks = [
  {
    href: 'https://github.com/Minto312',
    label: 'GitHub',
    iconClass: 'fab fa-github',
  },
  {
    href: 'https://x.com/Minto3219_',
    label: 'X',
    iconClass: 'fab fa-twitter',
  },
  {
    href: 'https://lapras.com/public/minto312',
    label: 'LAPRAS',
    iconClass: 'fas fa-link',
  },
  {
    href: 'https://qiita.com/Minto312',
    label: 'Qiita',
    iconClass: 'fas fa-pen-nib',
  },
];

const awards = [
  {
    title: '第35回 全国高等学校情報処理競技大会 個人 優勝',
    detail:
      '2023年7月｜全国商業高等学校協会｜1/230 (0.43%)｜',
    link: {
      href: 'https://tjournal.co.jp/local/komoro/post-9599/',
      label: '詳細',
    },
  },
  {
    title: '第4回 AI甲子園inやまがた 最優秀賞',
    detail:
      '2024年3月｜やまがたAI部 運営コンソーシアム｜1/34 (2.9%)｜',
    link: {
      href: 'https://www.yamagata-ai.org/news/ghqf1z6jve5mhmhshtzma5pbage8yj',
      label: '詳細',
    },
  },
  {
    title: '第20回 情報危機管理コンテスト 文部科学大臣賞',
    detail:
      '2025年5月｜特定非営利活動法人 情報セキュリティ研究所｜1/24 (4.2%)｜',
    link: {
      href: 'https://sccs-jp.org/symposium29/',
      label: '詳細',
    },
  },
];

const skills = [
  { name: 'JavaScript/TypeScript', experience: '経験2年' },
  { name: 'Python', experience: '経験2年' },
  { name: 'React', experience: '経験2年' },
  { name: 'Next.js', experience: '経験2年' },
  { name: 'Django', experience: '経験2年' },
  { name: 'Tailwind CSS', experience: '経験2年' },
  { name: 'Git', experience: '経験2年' },
  { name: 'Docker', experience: '経験2年' },
  { name: 'AWS', experience: '経験2年' },
  { name: 'GCP', experience: '経験2年' },
  { name: 'PostgreSQL', experience: '経験2年' },
];

const careers = [
  {
    title: '運営：シンギュラリティバトルクエスト運営',
    detail:
      '未来キッズコンテンツ総合研究所 (2024年4月 – 現在)｜高校生向けAI/ICT競技大会の運営｜',
    link: {
      href: 'https://singularitybattlequest.club/',
      label: '大会サイト',
    },
  },
];

const projects = [
  {
    title: 'イベント受付システム (業務委託)',
    description:
      'Next.jsで作成したイベント受付システム (期間: 1か月)｜担当: PdM｜技術スタック: Next.js, TypeScript',
  },
  {
    title: '物件情報サイト（業務委託）',
    description:
      '物件閲覧、検索、お問い合わせ機能を備えた物件情報サイト (期間: 4か月)｜担当: PdM｜技術スタック: Next.js, Django',
  },
];

const certifications = [
  '情報処理安全確保支援士 — 2024年10月取得',
  '応用情報技術者 — 2023年4月取得',
  '日商簿記検定2級 — 2023年8月取得',
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[800px] px-4 py-8 sm:px-6">
      <header className="mb-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Image
              src="/icon.png"
              alt="アイコン"
              width={120}
              height={120}
              className="h-[120px] w-[120px] rounded-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              高島 湊斗 <small className="text-base font-normal text-slate-500">(Takashima Minato)</small>
            </h1>
            <p className="mt-2">静岡, 日本 | 実務経験年数: 2年</p>
            <p className="mt-4">
              Webアプリケーションをメインに開発するフルスタックエンジニアです。PythonとTypeScriptを主軸に、バックエンドからフロントエンドまで幅広く携わっています。情報処理安全確保支援士の資格を持ち、低レイヤー技術やコンパイラ開発にも興味があります。
            </p>
            <div className="mt-6">
              <strong className="block text-base font-semibold text-slate-900">SNSリンク</strong>
              <ul className="mt-3 mb-0 flex list-none flex-wrap gap-4 p-0">
                {socialLinks.map(({ href, label, iconClass }) => (
                  <li key={label} className="flex items-center text-base">
                    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <i className={`${iconClass} text-lg`} aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Section title="受賞履歴">
        <ul className="m-0 list-none space-y-4 p-0">
          {awards.map(({ title, detail, link }) => (
            <li key={title} className="text-base leading-relaxed">
              <span className="font-medium text-slate-900">{title}</span>
              <br />
              <small className="text-sm text-slate-600">
                {detail}
                <a href={link.href} target="_blank" rel="noreferrer" className="ml-1">
                  {link.label}
                </a>
              </small>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="スキル">
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, experience }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-100 px-[0.6rem] py-[0.3rem] text-[0.85rem] text-slate-700"
            >
              {name}
              <span className="rounded-[6px] bg-cyan-50 px-[0.4rem] py-[0.2rem] text-[0.65rem] font-medium text-teal-700">
                {experience}
              </span>
            </span>
          ))}
        </div>
      </Section>

      <Section title="職務経歴">
        <ul className="m-0 list-none space-y-4 p-0">
          {careers.map(({ title, detail, link }) => (
            <li key={title} className="text-base leading-relaxed">
              <strong className="text-slate-900">{title}</strong>
              <br />
              <small className="text-sm text-slate-600">
                {detail}
                <a href={link.href} target="_blank" rel="noreferrer" className="ml-1">
                  {link.label}
                </a>
              </small>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="プロジェクト">
        <ul className="m-0 list-none space-y-4 p-0">
          {projects.map(({ title, description }) => (
            <li key={title} className="text-base leading-relaxed">
              <strong className="text-slate-900">{title}</strong>
              <br />
              <small className="text-sm text-slate-600">{description}</small>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="資格">
        <ul className="m-0 list-none space-y-2 p-0">
          {certifications.map((certification) => (
            <li key={certification} className="text-base text-slate-700">
              {certification}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 border-b-2 border-slate-200 pb-2 text-xl font-semibold text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
