import Link from "next/link"
import { ArrowLeft, Github, Twitter, Mail, Linkedin, MessageSquare, Youtube } from "lucide-react"

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
                <span className="text-white">~$ cat</span> MISSION
              </h2>
              <p className="opacity-80">
                AXROOT is dedicated to advancing cybersecurity knowledge through in-depth research, technical analysis,
                and educational content. Our mission is to explore the digital underground, document vulnerabilities,
                and share defensive techniques with the security community.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">
                <span className="text-white">~$ cat</span> WHO_WE_ARE
              </h2>
              <p className="opacity-80">
                Founded by a passionate cybersecurity researcher known online as "axroot," this platform serves as a
                repository for technical articles, tools, and resources focused on various aspects of information
                security. With experience in vulnerability research, exploit development, and defensive security, axroot
                aims to bridge the gap between theoretical security concepts and practical applications.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">
                <span className="text-white">~$ cat</span> OUR_FOCUS
              </h2>
              <ul className="list-disc pl-5 opacity-80 space-y-2">
                <li>Vulnerability research and responsible disclosure</li>
                <li>Malware analysis and reverse engineering</li>
                <li>Exploit development and mitigation techniques</li>
                <li>Network security and protocol analysis</li>
                <li>Web application security</li>
                <li>Operating system internals and kernel security</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8">
                <span className="text-white">~$ cat</span> ETHICS_STATEMENT
              </h2>
              <p className="opacity-80">
                All content on AXROOT is provided for educational and research purposes only. We believe in responsible
                disclosure and ethical hacking practices. The techniques and information shared on this platform should
                be used legally and ethically, with proper authorization when testing or analyzing systems.
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
                  href="https://linkedin.com/in/yoon-santos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-white/30 hover:bg-white/5 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                  <span className="text-white">LinkedIn</span>
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

