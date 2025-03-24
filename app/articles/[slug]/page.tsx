import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react"

// Sample data
const relatedArticles = [
  {
    title: "Memory Corruption Vulnerabilities in C++",
    slug: "memory-corruption-cpp",
    date: "2023-10-05",
  },
  {
    title: "Exploiting Format String Vulnerabilities",
    slug: "format-string-vulnerabilities",
    date: "2023-09-18",
  },
  {
    title: "Return-Oriented Programming (ROP) Techniques",
    slug: "rop-techniques",
    date: "2023-08-30",
  },
]

// Lista de todos os artigos disponíveis
const allArticles = [
  {
    title: "Exploiting Buffer Overflows in Modern Applications",
    slug: "buffer-overflows-modern-applications",
    date: "2023-11-15",
  },
  ...relatedArticles,
]

export async function generateStaticParams() {
  // Retorna um array de objetos com a propriedade slug
  return allArticles.map((article) => {
    return {
      slug: article.slug,
    }
  })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the article based on the slug
  // For this example, we'll use a mock article
  const article = {
    title: "Exploiting Buffer Overflows in Modern Applications",
    slug: "buffer-overflows-modern-applications",
    date: "2023-11-15",
    author: "axroot",
    category: "Exploit Development",
    content: `
      <h2>Introduction</h2>
      <p>
        Buffer overflows remain one of the most common and dangerous vulnerabilities in software today. 
        Despite being well-understood for decades, they continue to appear in modern applications due to 
        programming errors and the continued use of memory-unsafe languages like C and C++.
      </p>
      
      <h2>Understanding Buffer Overflows</h2>
      <p>
        A buffer overflow occurs when a program writes data beyond the allocated memory buffer. This happens 
        when the program fails to check the boundaries of the buffer before writing data to it. When the 
        buffer is exceeded, the program writes into adjacent memory, which can lead to crashes, data corruption, 
        or even code execution.
      </p>
      
      <h3>Stack-Based Buffer Overflows</h3>
      <p>
        Stack-based buffer overflows are the most common type. They occur when a buffer declared on the stack 
        is overwritten. Since the stack also contains the return address for function calls, overflowing a 
        buffer can overwrite this address, allowing an attacker to redirect program execution.
      </p>
      
      <pre><code>
void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // No bounds checking!
}
      </code></pre>
      
      <h3>Heap-Based Buffer Overflows</h3>
      <p>
        Heap-based overflows occur in dynamically allocated memory. These are often more complex to exploit 
        but can be just as dangerous. They can lead to corruption of heap management structures, which can 
        be leveraged for arbitrary code execution.
      </p>
      
      <h2>Exploitation Techniques</h2>
      <p>
        Modern exploitation of buffer overflows requires bypassing several security mechanisms:
      </p>
      
      <h3>Address Space Layout Randomization (ASLR)</h3>
      <p>
        ASLR randomizes the memory addresses used by system and application components, making it difficult 
        for attackers to predict target addresses. Bypass techniques include:
      </p>
      <ul>
        <li>Memory leaks that reveal address information</li>
        <li>Brute forcing (particularly in 32-bit systems)</li>
        <li>Relative addressing techniques</li>
      </ul>
      
      <h3>Data Execution Prevention (DEP)</h3>
      <p>
        DEP marks memory regions as non-executable, preventing direct execution of injected shellcode. 
        This is typically bypassed using Return-Oriented Programming (ROP), which chains together existing 
        code fragments (gadgets) to achieve the desired functionality.
      </p>
      
      <h2>Mitigation Strategies</h2>
      <p>
        Developers can protect against buffer overflows through:
      </p>
      <ul>
        <li>Using memory-safe languages (e.g., Rust, Go, Java)</li>
        <li>Employing bounds-checking functions (strncpy instead of strcpy)</li>
        <li>Implementing stack canaries to detect stack corruption</li>
        <li>Enabling compiler protections (FORTIFY_SOURCE, stack protection)</li>
        <li>Regular code audits and fuzzing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>
        Buffer overflows continue to be relevant in modern software security. Understanding how they work 
        and how they can be exploited is essential for both attackers and defenders. By implementing proper 
        security measures and coding practices, developers can significantly reduce the risk of buffer 
        overflow vulnerabilities in their applications.
      </p>
    `,
  }

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-white/30 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="text-3xl font-bold tracking-tighter">AXROOT</div>
            <div className="text-xs opacity-70">cybersecurity research</div>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-400 transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-gray-400 transition-colors">
                  ARTICLES
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-gray-400 transition-colors">
                  TOOLS
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400 transition-colors">
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Article Header */}
      <section className="py-8 border-b border-white/30">
        <div className="container mx-auto px-4">
          <Link href="/articles" className="inline-flex items-center text-sm hover:text-gray-400 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{article.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>{article.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Share Links */}
            <div className="mt-12 pt-6 border-t border-white/30">
              <div className="flex items-center">
                <span className="text-sm mr-4">Share this article:</span>
                <div className="flex space-x-4">
                  <button className="p-2 border border-white/30 hover:bg-white/10 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 bg-white/5 border-y border-white/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-white">
            <span className="text-white">~$ ls</span> RELATED_ARTICLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <article key={index} className="border border-white/30 bg-black p-4 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-bold mb-2 text-white">{article.title}</h3>
                <div className="flex items-center text-xs text-white/70 mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{article.date}</span>
                </div>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-white hover:text-gray-400 transition-colors text-sm"
                >
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/30">
        <div className="container mx-auto px-4 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} AXROOT. All rights reserved.</p>
          <p className="mt-2">All content on this site is provided for educational purposes only.</p>
        </div>
      </footer>
    </main>
  )
}

