import type { Metadata } from 'next'
import '../styles/globals.css'
import ReduxProvider from './providers/ReduxProvider'

export const metadata: Metadata = {
  title: 'Data Scube',
  description: 'Data Scube Application',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
