import type { Metadata } from 'next'

declare module 'next' {
  interface PageProps {
    params: {
      [key: string]: string
    }
  }
} 