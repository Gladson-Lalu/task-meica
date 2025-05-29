import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"],variable: "--font-inter" })

export const metadata: Metadata = {
  title: "MEICA EXPO 2025 - Middle East Instrumentation, Cybersecurity & Automation Expo",
  description: "The 6th edition of the Middle East Instrumentation, Cybersecurity & Automation Expo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
