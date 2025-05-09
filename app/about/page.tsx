import Link from "next/link"
import { ArrowLeft, Github, Twitter, Mail, MessageSquare, Youtube } from "lucide-react"

export default function About() {
  return (
    <div>
      {/* About Header */}
      <section className="py-8 border-b border-white/30">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm hover:text-gray-400 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-white">~$ ls</span> ABOUT_AXROOT
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <div className="flex items-center">
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-white">~$ cat</span> WHOAMI
              </h2>
              <p className="opacity-80">
                Cybersecurity professional with experience in Purple and Red Team. Passionate about the offensive area, 
                I am constantly acquiring knowledge to always improve myself and deliver the best results.
              </p>

              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-white mr-2">~$ ls</span>
                <span className="text-white">CONNECT</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="https://github.com/axr00t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-white/30 hover:bg-white/5 transition-colors"
                >
                  <Github className="h-6 w-6 text-white" />
                  <span className="text-white">GitHub</span>
                </a>

                <a
                  href="https://discord.gg/axroot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-white/30 hover:bg-white/5 transition-colors"
                >
                  <MessageSquare className="h-6 w-6 text-white" />
                  <span className="text-white">Discord</span>
                </a>

                <a
                  href="https://youtube.com/@axroot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-white/30 hover:bg-white/5 transition-colors"
                >
                  <Youtube className="h-6 w-6 text-white" />
                  <span className="text-white">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

