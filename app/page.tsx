import Link from "next/link"
import { FileText, User, Calendar, Terminal, Github, Download } from "lucide-react"
import { YouTubeVideo } from "./components/YouTubeVideo"

interface Tool {
  name: string
  description: string
  language: string
  githubUrl: string
  downloadUrl: string
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 border-b border-white/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-white">axroot@axroot ~$</span>
            </h1>
            <p className="text-lg mb-8 opacity-80">
              I share content about hacking.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 border-b border-white/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-white mr-2">~$ ls</span>
            <span className="text-white">FEATURED_ARTICLES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <article key={index} className="border border-white/30 bg-black hover:bg-white/5 transition-colors p-4">
                <div className="flex items-center space-x-2 text-xs mb-2 text-white/70">
                  <Calendar className="h-3 w-3" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{article.title}</h3>
                <p className="text-sm opacity-70 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="flex items-center text-xs text-white hover:text-gray-400 transition-colors"
                  >
                    <FileText className="mr-1 h-3 w-3" />
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-white mr-2">~$ ls</span>
            <span className="text-white">FEATURED_TOOLS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTools.map((tool, index) => (
              <div key={index} className="border border-white/30 p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Terminal className="h-5 w-5 mr-3 text-white" />
                    <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  </div>
                  <span className="text-xs px-2 py-1 bg-white/10 border border-white/30">{tool.language}</span>
                </div>
                <p className="mt-4 opacity-80 text-sm">{tool.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={tool.githubUrl}
                    className="flex items-center space-x-1 text-xs border border-white/30 px-3 py-1.5 hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5 mr-1" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={tool.downloadUrl}
                    className="flex items-center space-x-1 text-xs border border-white/30 px-3 py-1.5 hover:bg-white/10 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5 mr-1" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredArticles = [
  {
    title: "How to become a 'Hacker'",
    slug: "how-to-become-a-hacker",
    excerpt: "A complete guide on how to become a 'hacker' what you really need to know.",
    date: "2025-03-25",
    author: "axroot",
  },
  {
    title: "Mr. Robot CTF Writeup",
    slug: "mr-robot",
    excerpt: "Writeup of the Mr. Robot CTF (TryHackMe), exploring vulnerabilities and exploitation techniques.",
    date: "2024-03-24",
    author: "axroot",
  },
]

const featuredTools: Tool[] = [
  {
    name: "API Bounty",
    description: "Tool to automate the search for API Keys in Bug Bounty programs, performing a variety of search tasks.",
    language: "Python",
    githubUrl: "https://github.com/axr00t/api-bounty",
    downloadUrl: "https://github.com/axr00t/api-bounty",
  },
  {
    name: "Enum Bounty",
    description: "Tool to automate the enumeration process in Bug Bounty programs by performing a wide variety of enumeration tasks.",
    language: "Python",
    githubUrl: "https://github.com/axr00t/enumbounty",
    downloadUrl: "https://github.com/axr00t/enumbounty",
  },
]
