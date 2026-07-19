'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useMemo, useState, type ReactNode } from 'react';

const siteUrl = 'https://portfolio.minto312.com';
const createDate = (year: number, month: number, day = 1) => new Date(year, month - 1, day);
const EXPERIENCE_START_DATE = createDate(2023, 10);

type Duration = {
  years: number;
  months: number;
};

const calculateDuration = (startDate: Date, endDate: Date): Duration => {
  if (endDate < startDate) {
    return { years: 0, months: 0 };
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (endDate.getDate() < startDate.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
  };
};

const formatDurationLabel = ({ years, months }: Duration) => {
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years}年`);
  }

  if (months > 0) {
    parts.push(`${months}ヶ月`);
  }

  if (parts.length === 0) {
    return '1ヶ月未満';
  }

  return parts.join('');
};
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
  {
    title: '第21回 情報危機管理コンテスト 経済産業大臣賞',
    detail:
      '2026年5月｜特定非営利活動法人 情報セキュリティ研究所｜1/25 (4.0%)',
    link: {
      href: 'https://sccs-jp.org/symposium30/',
      label: '詳細',
    },
  },
];

type SkillDefinition = {
  name: string;
  startedAt: Date;
};

const skillDefinitions: SkillDefinition[] = [
  { name: 'TypeScript', startedAt: createDate(2023, 10) },
  { name: 'Go', startedAt: createDate(2023, 10) },
  { name: 'Python', startedAt: createDate(2023, 10) },
  { name: 'Rust', startedAt: createDate(2023, 10) },
  { name: 'Terraform', startedAt: createDate(2023, 10) },
  { name: 'Next.js', startedAt: createDate(2023, 10) },
  { name: 'Django', startedAt: createDate(2023, 10) },
  { name: 'PostgreSQL', startedAt: createDate(2023, 10) },
  { name: 'DynamoDB', startedAt: createDate(2024, 10) },
  { name: 'AWS', startedAt: createDate(2023, 10) },
  { name: 'GCP', startedAt: createDate(2023, 10) },
  { name: 'Ubuntu', startedAt: createDate(2023, 10) },
  { name: 'Docker', startedAt: createDate(2023, 10) },
  { name: 'CI/CD', startedAt: createDate(2024, 10) },
  { name: 'Kubernetes', startedAt: createDate(2024, 10) },
  { name: '情報処理安全確保支援士', startedAt: createDate(2024, 10) },
];

const careers = [
  {
    title: '代表取締役：株式会社Raimテクノロジーズ',
    detail:
      '株式会社Raimテクノロジーズ (2025年12月 – 現在)｜受託開発を基盤としたAI領域のプロダクト開発｜',
    link: {
      href: 'https://raim-tech.com',
      label: '会社サイト',
    },
  },
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
    id: 'digital-recipe-narrative-ai',
    title: '生成AIを活用したナラティブ分析',
    summary:
      '官公庁｜2025年12月〜現在｜業務委託｜全体35名／チーム15名｜LLMエンジニア (開発〜品質検証)',
    industry: '官公庁',
    period: '2025年12月〜現在',
    employmentType: '業務委託',
    teamScale: '全体35名／チーム15名',
    techStack: ['Slack'],
    responsibilities: [
      'プロダクト開発',
      'LLMのチューニングおよび品質要件・安全性検証',
    ],
    activities: [
      '生成AIを活用したナラティブ分析サービスの開発に参画',
      'LLMの品質・安全性に関する検証を実施',
    ],
    achievements: [
      '防衛装備庁との国プロに参画（NDA厳格のため詳細非公開）',
    ],
  },
  {
    id: 'tokyo-recurrent-navi',
    title: '東京リカレントナビ - RAGチャットボット',
    summary:
      '教育｜2025年11月〜現在｜業務委託｜全体10名／チーム2名｜バックエンド・インフラ (設計〜実装)',
    industry: '教育',
    period: '2025年11月〜現在',
    employmentType: '業務委託',
    teamScale: '全体10名／チーム2名',
    techStack: [
      'Python',
      'Azure Functions',
      'PostgreSQL',
      'pgvector',
      'Terraform',
      'Azure OpenAI',
      'WordPress',
      'さくらクラウド',
      'Slack',
    ],
    responsibilities: [
      'RAGチャットボット開発（東京都生涯学習講座検索システム）',
      'サーバーレスバックエンド開発',
      'ベクトルDB設計・ハイブリッド検索実装',
      'Terraformによるインフラ自動化（IaC）',
    ],
    activities: [
      'Azure OpenAI Embeddingsを用いたRAGパイプラインを構築',
      'pgvectorとpg_trgmを組み合わせたハイブリッド検索を実装',
      'VNet統合とNAT Gatewayによる固定送信元IP構成を実装',
      'WordPressプラグインとして組み込み可能なチャットウィジェットを開発',
    ],
    achievements: [
      '日本語クエリに対する検索精度を向上',
      '外部API連携時のセキュリティ要件に対応',
      '既存CMSへの導入障壁を低減',
    ],
  },
  {
    id: 'behavior-analytics-portfolio',
    title: '行動分析AIポートフォリオサービス',
    summary:
      '教育｜2025年10月〜現在｜正社員｜全体6名／チーム1名｜PdM・フルスタック (要件定義〜運用)',
    industry: '教育',
    period: '2025年10月〜現在',
    employmentType: '正社員',
    teamScale: '全体6名／チーム1名',
    techStack: ['TypeScript', 'Next.js', 'Go', 'PostgreSQL', 'Ubuntu', 'Slack'],
    responsibilities: [
      '顧客ヒアリングと要件定義',
      '運用設計と社外向け技術資料の作成',
      'Next.js＋Goによるモダンフルスタック開発',
      'LLMチューニングと品質・安全性検証',
    ],
    activities: [
      '構想段階のプロダクトに対して要件定義・仕様策定を実行',
      'OpenTelemetryによる観測基盤を整備しオブザーバビリティを確立',
      'LLMのファインチューニングとペルソナ設定を継続的に検証',
      '社外向け資料作成を通じコンサルティング知見を蓄積',
    ],
    achievements: [
      '実装開始から半月でPoCをローンチし意思決定を加速',
      'LLM利用の安全性要件を整備し顧客信頼性を向上',
      '資料整備を通じ社外折衝と知見共有の仕組みを構築',
    ],
  },
  {
    id: 'plateau2minecraft-support',
    title: 'plateau2minecraft支援',
    summary:
      '教育｜2025年10月｜業務委託｜全体1名／チーム1名｜Goエンジニア (要件定義〜実装)',
    industry: '教育',
    period: '2025年10月',
    employmentType: '業務委託',
    teamScale: '全体1名／チーム1名',
    techStack: ['Go', 'Slack'],
    responsibilities: ['plateau2minecraftのエラー対応・改変', '地理座標変換ツールの開発'],
    activities: [
      'OSS「plateau2minecraft」で発生したエラーを解析し改修プランを策定',
      'WGS84楕円体パラメータを用いた座標変換ライブラリをGoで実装',
      'CLIツールとして単体・一括変換機能を提供し手作業を削減',
    ],
    achievements: [
      '建物下に地面生成を行いワールド整備工数を大幅に削減',
      '短期間で顧客課題に直結する機能を実装し価値検証を完了',
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
    techStack: [
      'TypeScript',
      'Next.js',
      'MUI',
      'Python',
      'Django',
      'PostgreSQL',
      'AWS ECS',
      'Discord',
    ],
    responsibilities: [
      'PdM／エンジニアとして要件定義〜実装を担当',
      'API設計とUX設計',
      '運用機能の構築とリリースマネジメント',
    ],
    activities: [
      'Knox＋DRFを活用した認証基盤／API基盤を設計・実装',
      'ロール制御や楽観的更新など運用要件に応じた仕組みを整備',
      'Next.js＋MUIで顧客導線に合わせたUIを高速に試作',
    ],
    achievements: [
      '要件定義からローンチまで一気通貫で実行し顧客満足度を向上',
      '柔軟なUX設計で反復的な改善サイクルを短縮',
      '運用・保守観点の要件を実装に織り込み安定稼働を実現',
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
    responsibilities: [
      'Flask＋FirebaseによるWebアプリ設計・実装',
      'GraphAI/Grapysを活用したOSS連携',
      'OpenAPI仕様策定とドメインロジック実装',
    ],
    activities: [
      '人気ボードゲーム「Codenames」をWeb向けに再設計',
      'OSSパートナーと連携し新機能案と実装方針を提案',
      'LLMインターフェースの共通化を行い新機能の土台を整備',
    ],
    achievements: [
      '直感的なUI/UXを再現しデモイベントで高評価を獲得',
      'OSSコミュニティと協働し継続的な改善プロセスを確立',
      'LLM活用の基盤を整備し後続開発の加速に貢献',
    ],
  },
  {
    id: 'b2b-event-check-in',
    title: 'BtoBイベント受付システム',
    summary:
      '営業｜2024年10月｜業務委託｜全体2名／チーム1名｜PdM・フルスタック (要件定義〜実装)',
    industry: '営業',
    period: '2024年10月',
    employmentType: '業務委託',
    teamScale: '全体2名／チーム1名',
    techStack: [
      'TypeScript',
      'Next.js',
      'Material Tailwind',
      'SWR',
      'Prisma',
      'PostgreSQL',
      'Windows',
      'Discord',
    ],
    responsibilities: [
      'プロダクトマネジメントとエンジニアリングを兼任',
      '工数管理・スコープ設計・UI/UX設計',
      'バルク入出力やオペレーション改善機能の実装',
    ],
    activities: [
      '来訪オペレーション全体をカバーするUI/UXを設計し試作',
      '冪等性と文字化け防止を考慮したバルク入出力を整備',
      'Next.js＋Prismaで業務フローを支えるAPIを短期間で提供',
    ],
    achievements: [
      '業務工数を半減させ半分の納期でリリースを達成',
      '現場オペレーションを意識したUXで導入後の属人化を抑制',
      'スコープ調整によりスケジュール制約下でも品質を担保',
    ],
  },
];

const services = [
  {
    title: 'PdM伴走と要件定義',
    description:
      '顧客ヒアリングから仕様策定、スコープ設計、リリース計画までを一気通貫で支援します。ビジネス価値を起点とした仮説検証サイクルの高速化が得意です。',
  },
  {
    title: 'フルスタック開発・運用',
    description:
      'Next.js・TypeScript・Go・Pythonを中心に、フロントエンドからバックエンド、クラウドインフラまで横断して実装します。運用基盤やオブザーバビリティの整備も対応可能です。',
  },
  {
    title: 'AI/LLMプロトタイピング',
    description:
      '生成AIやMLを活用したPoCを短期間で立ち上げ、LLMチューニングや安全性検証まで伴走します。AIプロダクト導入に必要な要件定義やガイドライン整備もサポートします。',
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
  const now = useMemo(() => new Date(), []);
  const experienceDuration = useMemo(
    () => formatDurationLabel(calculateDuration(EXPERIENCE_START_DATE, now)),
    [now],
  );
  const skills = useMemo(
    () =>
      skillDefinitions.map(({ name, startedAt }) => ({
        name,
        experience: `経験${formatDurationLabel(calculateDuration(startedAt, now))}`,
      })),
    [now],
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
          '高島 湊斗 (Takashima Minato) はTypeScriptとGo, Pythonを中心にフロントエンドからインフラまでを手がけるソフトウェアエンジニアです。',
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
          '高島 湊斗 (Takashima Minato) のポートフォリオサイト。要件定義からローンチまで伴走するPdM／フルスタック開発やAIプロダクトの実績、受賞歴、資格、経歴を紹介しています。',
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
            <p className="mt-2">静岡, 日本 | 実務経験年数: {experienceDuration}</p>
            <p className="mt-4">
              Webアプリケーションをメインに開発するフルスタックエンジニアです。TypeScriptとGo, Pythonを主軸に、フロントエンドからインフラまで幅広く携わっています。情報処理安全確保支援士の資格を持ち、低レイヤー技術やコンパイラ開発にも興味があります。
            </p>
            <p className="mt-2">
              また、株式会社Raimテクノロジーズ(<a href='https://raim-tech.com' target='blank'>https://raim-tech.com</a>)を設立し、代表取締役として受託開発を基盤にしつつ、AI・データ領域のプロダクト開発にも取り組んでいます。
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
