import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AXROOT - Cybersecurity Research",
  description: "Cybersecurity research, articles, and tools",
  icons: {
    icon: [
      {
        url: 'https://cdn-icons-png.flaticon.com/512/6463/6463391.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    shortcut: [
      {
        url: 'https://cdn-icons-png.flaticon.com/512/6463/6463391.png',
        type: 'image/png',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white font-mono flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'