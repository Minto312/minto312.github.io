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
              <a href="#about" className="hidden md:block transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#skills" className="hidden md:block transition-colors hover:text-foreground/80">
                Skills
              </a>
              <a href="#projects" className="hidden md:block transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#experience" className="hidden md:block transition-colors hover:text-foreground/80">
                Experience
              </a>
              <a href="#awards" className="hidden md:block transition-colors hover:text-foreground/80">
                Awards
              </a>
              <a href="#certifications" className="hidden md:block transition-colors hover:text-foreground/80">
                Certifications
              </a>
              <a href="#sns" className="hidden md:block transition-colors hover:text-foreground/80">
                SNS
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">プロフィール</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                      <img src="/icon.png" alt="プロフィール画像" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">高島 湊斗</h1>
                      <p className="text-muted-foreground">Takashima Minato</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Webアプリケーションをメインに作っています．
                    <br />
                    メイン言語はPython, TS．
                    <br />
                    情報処理安全確保支援士．
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    低レイヤーにも興味あり．コンパイラを作りたいみ
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">詳細情報</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">静岡, 日本</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">経験年数: 2年</span>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* <Card>
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
            </Card> */}

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
                  <Badge variant="secondary">GCP</Badge>
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
                  イベント受付システム
                  <div className="flex gap-2">
                    {/* <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button> */}
                  </div>
                </CardTitle>
                <CardDescription>
                  Next.jsで作成したイベント受付システム
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
                    <h3 className="text-xl font-semibold">シンギュラリティバトルクエスト運営</h3>
                    <p className="text-muted-foreground">未来キッズコンテンツ総合研究所</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2024年4月 - 現在</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>高校生向けAI / ICT競技大会の運営</li>
                  <li>大会ホームページ：<a href="https://singularitybattlequest.club/" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://singularitybattlequest.club/</a></li>
                </ul>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="mx-auto container px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Awards</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
              <span className="mt-1">
                {/* Medalアイコン */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v13m0 0l-3-3m3 3l3-3" /></svg>
              </span>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <span className="font-semibold text-lg">第35回 全国高等学校情報処理競技大会　個人 優勝</span>
                  <span className="text-sm text-muted-foreground md:ml-2">2023年7月</span>
                </div>
                <div className="text-sm text-muted-foreground">主催: 全国商業高等学校協会</div>
                <div className="text-sm">個人の部で優勝し，文部科学省より賞状をいただきました．</div>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
              <span className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v13m0 0l-3-3m3 3l3-3" /></svg>
              </span>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <span className="font-semibold text-lg">第20回 情報危機管理コンテスト　文部科学大臣賞</span>
                  <span className="text-sm text-muted-foreground md:ml-2">2025年5月</span>
                </div>
                <div className="text-sm text-muted-foreground"></div>
                <div className="text-sm">it-sawayakaとして文部科学大臣賞をいただきました．</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
              <span className="mt-1">
                {/* 資格アイコン */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>
              </span>
              <div>
                <span className="font-semibold text-lg">
                  情報処理安全確保支援士
                </span>
                <div className="text-sm text-muted-foreground">2024年10月</div>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
              <span className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>
              </span>
              <div>
                <span className="font-semibold text-lg">
                  応用情報技術者
                </span>
                <div className="text-sm text-muted-foreground">2023年4月</div>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
              <span className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>
              </span>
              <div>
                <span className="font-semibold text-lg">
                  日商簿記検定2級
                </span>
                <div className="text-sm text-muted-foreground">2023年8月</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SNS Section */}
      <section id="sns" className="mx-auto container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">SNS</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <a href="https://github.com/Minto312" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-gray-700 to-black p-6 flex flex-col items-center">
                    <Github className="h-10 w-10 text-white mb-2" />
                    <h3 className="text-lg font-semibold text-white">GitHub</h3>
                    <p className="text-gray-300">Minto312</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold"></p>
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://x.com/Minto3219_" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 flex flex-col items-center">
                    <Twitter className="h-10 w-10 text-white mb-2" />
                    <h3 className="text-lg font-semibold text-white">X</h3>
                    <p className="text-blue-200">@Minto3219_</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold"></p>
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://lapras.com/public/minto312" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-6 flex flex-col items-center">
                    <BookOpen className="h-10 w-10 text-white mb-2" />
                    <h3 className="text-lg font-semibold text-white">LAPRAS</h3>
                    <p className="text-emerald-100">Minto312</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold"></p>
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </CardContent>
              </Card>
            </a>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="mx-auto container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Copyright © 2025 Minto312. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
