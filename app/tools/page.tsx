import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, Github, Terminal } from "lucide-react"

export default function Tools() {
  return (
    <div>
      {/* Tools Header */}
      <section className="py-8 border-b border-white/30">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm hover:text-gray-400 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-white">~$ ls</span> SECURITY_TOOLS
          </h1>

          <p className="max-w-3xl opacity-80">
            A collection of custom-developed security tools and utilities for penetration testing, bug bounty,vulnerability
            assessment, and security research.
          </p>
        </div>
      </section>

      {/* Tools List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="border border-white/30 p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Terminal className="h-5 w-5 mr-3 text-white" />
                    <h2 className="text-xl font-bold text-white">{tool.name}</h2>
                  </div>
                  <span className="text-xs px-2 py-1 bg-white/10 border border-white/30">{tool.language}</span>
                </div>

                <p className="mt-4 opacity-80 text-sm">{tool.description}</p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-xs">
                    <span className="w-24 opacity-70">Version:</span>
                    <span>{tool.version}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-24 opacity-70">Updated:</span>
                    <span>{tool.updated}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-24 opacity-70">Category:</span>
                    <span>{tool.category}</span>
                  </div>
                </div>

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
                  <a
                    href={tool.docsUrl}
                    className="flex items-center space-x-1 text-xs border border-white/30 px-3 py-1.5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    <span>Documentation</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white/5 border-y border-white/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-white">
              <span className="text-white">~$ cat</span> DISCLAIMER
            </h2>
            <div className="text-sm opacity-80 space-y-3">
              <p>
                The tools provided on this website are intended for educational and research purposes only. They should
                only be used in environments where you have explicit permission to test.
              </p>
              <p>
                Unauthorized use of these tools against systems you do not own or have permission to test is illegal and
                unethical. The author takes no responsibility for any misuse of these tools.
              </p>
              <p>
                By downloading and using these tools, you acknowledge that you understand these terms and will use them
                responsibly and legally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const tools = [
  {
    name: "API Bounty",
    description:
      "The API Bounty tool automates the process of searching for API Keys in Bug Bounty programs, performing a wide variety of search tasks.",
    language: "Python",
    version: "1.0.0",
    updated: "2024-06-21",
    category: "Offensive Security",
    githubUrl: "https://github.com/axr00t/api-bounty",
    downloadUrl: "https://github.com/axr00t/api-bounty",
    docsUrl: "https://github.com/axr00t/api-bounty/blob/main/README.md",
  },
  {
    name: "Enum Bounty",
    description:
      "Tool to automate the enumeration process in Bug Bounty programs by performing a wide variety of enumeration tasks.",
    language: "Python",
    version: "1.0.0",
    updated: "20234-06-15",
    category: "Offensive Security",
    githubUrl: "https://github.com/axr00t/enum-bounty",
    downloadUrl: "https://github.com/axr00t/enum-bounty",
    docsUrl: "https://github.com/axr00t/enum-bounty/blob/main/README.md",
  },
]

