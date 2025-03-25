import Link from "next/link"
import { Calendar, User } from "lucide-react"

const articles = [
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
    excerpt: "Writeup detalhado da máquina Mr. Robot do VulnHub, explorando vulnerabilidades e técnicas de exploração.",
    date: "2024-03-24",
    author: "axroot",
  },
  // Adicione mais artigos aqui conforme necessário
]

export default function ArticlesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Articles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.slug} className="border border-white/30 bg-black hover:bg-white/5 transition-colors p-4">
              <div className="flex items-center space-x-2 text-xs mb-2 text-white/70">
                <Calendar className="h-3 w-3" />
                <span>{article.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">{article.title}</h2>
              <p className="text-sm opacity-70 mb-4">{article.excerpt}</p>
              <div className="flex items-center space-x-2 text-xs">
                <User className="h-3 w-3" />
                <span>{article.author}</span>
              </div>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-4 inline-block text-sm text-white hover:text-gray-400 transition-colors"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sample data
const categories = [
  { name: "Malware Analysis", slug: "malware-analysis" },
  { name: "Exploit Development", slug: "exploit-development" },
  { name: "Network Security", slug: "network-security" },
  { name: "Web Security", slug: "web-security" },
  { name: "Reverse Engineering", slug: "reverse-engineering" },
  { name: "Cryptography", slug: "cryptography" },
  { name: "OSINT", slug: "osint" },
  { name: "Social Engineering", slug: "social-engineering" },
]

const allArticles = [
  {
    title: "Exploiting Buffer Overflows in Modern Applications",
    slug: "buffer-overflows-modern-applications",
    excerpt:
      "An in-depth analysis of buffer overflow vulnerabilities that still plague modern software despite decades of awareness. This article explores detection, exploitation, and mitigation techniques.",
    date: "2023-11-15",
    author: "axroot",
    category: "Exploit Development",
  },
  {
    title: "Advanced Persistence Techniques in Linux Systems",
    slug: "advanced-persistence-linux",
    excerpt:
      "Examining sophisticated methods attackers use to maintain access to compromised Linux environments. Learn about rootkits, backdoors, and other persistence mechanisms.",
    date: "2023-10-28",
    author: "axroot",
    category: "Malware Analysis",
  },
  {
    title: "Reverse Engineering Proprietary Protocols",
    slug: "reverse-engineering-protocols",
    excerpt:
      "Methodologies and tools for analyzing and understanding undocumented network protocols. This guide walks through the process of protocol discovery, analysis, and documentation.",
    date: "2023-10-12",
    author: "axroot",
    category: "Reverse Engineering",
  },
  {
    title: "Zero-Day Vulnerability Discovery Methodology",
    slug: "zero-day-discovery",
    excerpt:
      "A structured approach to finding previously unknown vulnerabilities in software and hardware. This article covers the entire process from target selection to responsible disclosure.",
    date: "2023-09-30",
    author: "axroot",
    category: "Exploit Development",
  },
  {
    title: "Kernel Exploitation Fundamentals",
    slug: "kernel-exploitation",
    excerpt:
      "Understanding the basics of kernel-level vulnerabilities and how to develop reliable exploits. This technical deep-dive explores kernel structures, memory management, and privilege escalation.",
    date: "2023-09-15",
    author: "axroot",
    category: "Exploit Development",
  },
]

