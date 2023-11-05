import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Web Effects (ayush24k)',
  description: 'Web Effects created by Ayush Anshu (ayush24k) while learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
