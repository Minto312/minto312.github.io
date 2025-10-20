'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useMemo, useState, type ReactNode } from 'react';

const siteUrl = 'https://portfolio.minto312.com';
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

type Project = {
  id: string;
  title: string;
  summary: string;
  industry: string;
  period: string;
  employmentType: string;
  teamScale: string;
  techStack: string[];
  responsibilities: string[];
  activities: string[];
  achievements: string[];
};

const projects: Project[] = [
  {
    id: 'behavior-analytics-portfolio',
    title: '行動分析AIポートフォリオサービス',
    summary:
      '教育｜2025年10月〜現在｜正社員｜全体6名／チーム1名｜PdM・フルスタック (要件定義〜保守)',
    industry: '教育',
    period: '2025年10月〜現在',
    employmentType: '正社員',
    teamScale: '全体6名／チーム1名',
    techStack: ['TypeScript', 'Next.js', 'Go', 'PostgreSQL', 'Ubuntu', 'Slack'],
    responsibilities: ['要件定義', '設計', '実装', 'テスト', '保守'],
    activities: [
      '要件定義と運用設計を主導',
      '社外向け技術資料の作成',
      'Next.js (TypeScript) と Go を用いたモダンフルスタック開発',
      'LLMのチューニングおよび安全性検証',
    ],
    achievements: [
      '構想段階のプロダクトを要件定義し、半月でPoCをローンチ',
      'LLMを活用した差別化機能の検証を完遂',
      '社外資料作成を通じたコンサルティング知見の獲得',
    ],
  },
  {
    id: 'plateau2minecraft-support',
    title: 'plateau2minecraft支援',
    summary:
      '教育｜2024年10月｜業務委託｜全体1名／チーム1名｜PdM・フルスタック (要件定義〜テスト)',
    industry: '教育',
    period: '2024年10月',
    employmentType: '業務委託',
    teamScale: '全体1名／チーム1名',
    techStack: ['Go', 'Slack'],
    responsibilities: ['要件定義', '設計', '実装', 'テスト'],
    activities: [
      'OSSツール「plateau2minecraft」利用時のエラー解析と改善策立案',
      '緯度経度とMinecraft座標を相互変換する支援ツールを開発',
    ],
    achievements: [
      '要件定義から実装まで迅速に遂行し顧客価値を最大化',
      'スコープの絞り込みにより短期間で確実な施策を実現',
    ],
  },
  {
    id: 'real-estate-search',
    title: '物件検索サイト',
    summary:
      '不動産｜2024年10月〜2025年9月｜業務委託｜全体3名／チーム2名｜PM・フルスタック (要件定義〜テスト)',
    industry: '不動産',
    period: '2024年10月〜2025年9月',
    employmentType: '業務委託',
    teamScale: '全体3名／チーム2名',
    techStack: ['TypeScript', 'Next.js', 'Python', 'Django', 'PostgreSQL', 'AWS ECS', 'Discord'],
    responsibilities: ['要件定義', '設計', '実装', 'テスト'],
    activities: [
      'PMとしてチームマネジメントを担当',
      'Next.jsを用いたフロントエンドおよびDjangoによるバックエンド開発',
    ],
    achievements: [
      'ヒアリングから実装まで一貫して対応しローンチを達成',
      '保守性・セキュリティを両立した高品質な設計を実現',
    ],
  },
  {
    id: 'codenames-graphai',
    title: 'Codenames with GraphAI Agents',
    summary:
      '教育・エンタメ｜2025年4月〜2025年7月｜インターン｜全体5名／チーム2名｜エンジニア (設計〜テスト)',
    industry: '教育・エンタメ',
    period: '2025年4月〜2025年7月',
    employmentType: 'インターン',
    teamScale: '全体5名／チーム2名',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'AWS EC2', 'Slack', 'Trello'],
    responsibilities: ['設計', '実装', 'テスト'],
    activities: [
      'ボードゲーム「Codenames」のWeb再現を担当',
      'GraphAI (Grapys) への機能提案と実装計画策定',
    ],
    achievements: [
      '認可を得てUI/UXを再現したWeb実装を完遂',
      'OSS開発団体と連携し改善提案と実装に着手',
    ],
  },
  {
    id: 'b2b-event-check-in',
    title: 'BtoBイベント受付システム',
    summary:
      '営業｜2025年10月｜業務委託｜全体2名／チーム1名｜PdM・フルスタック (要件定義〜テスト)',
    industry: '営業',
    period: '2025年10月',
    employmentType: '業務委託',
    teamScale: '全体2名／チーム1名',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Windows', 'Discord'],
    responsibilities: ['要件定義', '設計', '実装', 'テスト'],
    activities: [
      'プロダクトマネジメントおよびチームマネジメントを兼務',
      'Next.jsを活用したフロントエンド・バックエンド実装を一気通貫で担当',
    ],
    achievements: [
      '適切なスコープ設計により工数を約半減',
      '顧客の厳しいスケジュールに柔軟に対応し貢献',
    ],
  },
];

const services = [
  {
    title: 'Webアプリケーション開発',
    description:
      '要件定義からUI設計、フロントエンド・バックエンド実装、運用保守まで一気通貫で対応します。Next.jsやReact、Djangoを活用し、業務課題に合わせた堅牢なWebアプリケーションを構築します。',
  },
  {
    title: 'AI/データ活用プロトタイピング',
    description:
      '機械学習モデルを用いたPoC開発や、生成AIを活用した業務効率化プロダクトの試作を得意としています。Pythonやクラウドサービスを組み合わせ、短期間で価値検証を行います。',
  },
  {
    title: '技術顧問・技術選定サポート',
    description:
      'スタートアップや新規事業に対し、技術的な意思決定を支援します。チームの開発体制構築、セキュリティレビュー、クラウドアーキテクチャ設計など、実務経験に基づくアドバイスを提供します。',
  },
];

const certifications = [
  '情報処理安全確保支援士 — 2024年10月取得',
  '応用情報技術者 — 2023年4月取得',
  '日商簿記検定2級 — 2023年8月取得',
];

export default function HomePage() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}#person`,
        name: '高島 湊斗',
        alternateName: 'Takashima Minato',
        url: siteUrl,
        description:
          '高島 湊斗 (Takashima Minato) はPythonとTypeScriptを中心にフルスタック開発を手がけるソフトウェアエンジニアです。',
        jobTitle: 'フルスタックエンジニア',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressRegion: 'Shizuoka',
        },
        sameAs: socialLinks.map(({ href }) => href),
        knowsAbout: skills.map(({ name }) => name),
        award: awards.map(({ title }) => title),
        makesOffer: services.map(({ title, description }) => ({
          '@type': 'Offer',
          name: title,
          description,
          availability: 'https://schema.org/InStock',
          areaServed: {
            '@type': 'Country',
            name: 'Japan',
          },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: '高島 湊斗 – ポートフォリオ',
        description:
          '高島 湊斗 (Takashima Minato) のポートフォリオサイト。PythonやTypeScriptを活用したフルスタック開発実績や受賞歴、資格、経歴を紹介しています。',
        inLanguage: 'ja',
        publisher: {
          '@id': `${siteUrl}#person`,
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-[800px] px-4 py-8 sm:px-6">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
          {projects.map((project) => (
            <li key={project.id} className="text-base leading-relaxed">
              <strong className="text-slate-900">{project.title}</strong>
              <br />
              <small className="text-sm text-slate-600">{project.summary}</small>
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                >
                  詳細を見る
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="提供できるサービス">
        <ul className="m-0 list-none space-y-4 p-0">
          {services.map(({ title, description }) => (
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
      {activeProject ? (
        <ProjectDetailModal project={activeProject} onClose={() => setActiveProjectId(null)} />
      ) : null}
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

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.id}-title`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id={`${project.id}-title`} className="text-xl font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{project.summary}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="詳細を閉じる"
            className="rounded-full border border-transparent bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <dl className="mt-4 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-slate-900">業種</dt>
            <dd className="mt-1">{project.industry}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">期間</dt>
            <dd className="mt-1">{project.period}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">雇用形態</dt>
            <dd className="mt-1">{project.employmentType}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">チーム規模</dt>
            <dd className="mt-1">{project.teamScale}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-semibold text-slate-900">使用技術</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">担当領域</dt>
            <dd className="mt-1 space-y-1">
              {project.responsibilities.map((responsibility) => (
                <p key={responsibility}>{responsibility}</p>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-6 space-y-4 text-sm text-slate-700">
          <section>
            <h4 className="text-base font-semibold text-slate-900">主な取り組み</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {project.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold text-slate-900">実績</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {project.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
