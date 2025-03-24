import Link from "next/link"

export function Navbar() {
  return (
    <header className="border-b border-white/30 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="text-xs opacity-70">axroot</div>
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
  )
} 