import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Calendar,
  MapPin,
  Download,
  Twitter,
  Instagram,
  Youtube,
  BookOpen,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Code className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Portfolio</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </a>
              <a href="#sns" className="transition-colors hover:text-foreground/80">
                SNS
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">田中 太郎</h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              フルスタックソフトウェアエンジニア
            </p>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              モダンなWebアプリケーションとモバイルアプリの開発に情熱を注いでいます。
              ユーザー体験を重視した高品質なソフトウェアの構築を得意としています。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              履歴書をダウンロード
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              お問い合わせ
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">プロフィール</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    5年以上のソフトウェア開発経験を持つフルスタックエンジニアです。
                    React、Node.js、TypeScriptを中心とした現代的な技術スタックを使用して、
                    スケーラブルで保守性の高いアプリケーションを開発しています。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ユーザー中心設計とアジャイル開発手法を重視し、
                    チームと協力して高品質なプロダクトを継続的に提供することを心がけています。
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">詳細情報</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">東京, 日本</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">経験年数: 5年</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">専門: フルスタック開発</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto container px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Database className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-lg">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">iOS</Badge>
                  <Badge variant="secondary">Android</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Code className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                <CardTitle className="flex items-center justify-between">
                  Eコマースプラットフォーム
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Next.js、Stripe、Prismaを使用したフルスタックEコマースアプリケーション
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Stripe
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prisma
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4"></div>
                <CardTitle className="flex items-center justify-between">
                  タスク管理アプリ
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>React NativeとFirebaseを使用したクロスプラットフォームモバイルアプリ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Redux
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4"></div>
                <CardTitle className="flex items-center justify-between">
                  データ分析ダッシュボード
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>PythonとReactを使用したリアルタイムデータ可視化プラットフォーム</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    D3.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    FastAPI
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto container px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">シニアソフトウェアエンジニア</h3>
                    <p className="text-muted-foreground">株式会社テックイノベーション</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2022年4月 - 現在</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>React/Next.jsを使用したWebアプリケーションの設計・開発</li>
                  <li>マイクロサービスアーキテクチャの導入とAPI設計</li>
                  <li>チームリードとして5名のエンジニアをマネジメント</li>
                  <li>CI/CDパイプラインの構築と運用効率の向上</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">ソフトウェアエンジニア</h3>
                    <p className="text-muted-foreground">株式会社デジタルソリューションズ</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2020年4月 - 2022年3月</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Vue.js/Nuxt.jsを使用したSPAの開発</li>
                  <li>Node.js/Expressによるバックエンド開発</li>
                  <li>PostgreSQLを使用したデータベース設計</li>
                  <li>アジャイル開発手法によるプロジェクト推進</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">ジュニアソフトウェアエンジニア</h3>
                    <p className="text-muted-foreground">株式会社スタートアップテック</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2019年4月 - 2020年3月</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>HTML/CSS/JavaScriptによるフロントエンド開発</li>
                  <li>Pythonを使用したデータ処理スクリプトの作成</li>
                  <li>Git/GitHubを使用したバージョン管理</li>
                  <li>テスト駆動開発（TDD）の実践</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section id="sns" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">SNS</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-gray-700 to-black p-6 flex flex-col items-center">
                  <Twitter className="h-10 w-10 text-white mb-2" />
                  <h3 className="text-lg font-semibold text-white">X</h3>
                  <p className="text-gray-300">@tanaka_dev</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold">5.2K</p>
                  <p className="text-sm text-muted-foreground">フォロワー</p>
                  <Button variant="ghost" className="mt-2 w-full" size="sm">
                    フォローする
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-6 flex flex-col items-center">
                  <Instagram className="h-10 w-10 text-white mb-2" />
                  <h3 className="text-lg font-semibold text-white">Instagram</h3>
                  <p className="text-pink-100">@tanaka_coder</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold">8.7K</p>
                  <p className="text-sm text-muted-foreground">フォロワー</p>
                  <Button variant="ghost" className="mt-2 w-full" size="sm">
                    フォローする
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 flex flex-col items-center">
                  <Youtube className="h-10 w-10 text-white mb-2" />
                  <h3 className="text-lg font-semibold text-white">YouTube</h3>
                  <p className="text-red-100">TanakaTech</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold">12.4K</p>
                  <p className="text-sm text-muted-foreground">チャンネル登録者</p>
                  <Button variant="ghost" className="mt-2 w-full" size="sm">
                    登録する
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-6 flex flex-col items-center">
                  <BookOpen className="h-10 w-10 text-white mb-2" />
                  <h3 className="text-lg font-semibold text-white">LAPLAS</h3>
                  <p className="text-emerald-100">tanaka_engineer</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold">2.3K</p>
                  <p className="text-sm text-muted-foreground">フォロワー</p>
                  <Button variant="ghost" className="mt-2 w-full" size="sm">
                    フォローする
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                新しいプロジェクトやコラボレーションの機会について、 お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  tanaka@example.com
                </Button>
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="mx-auto container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 田中太郎. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
