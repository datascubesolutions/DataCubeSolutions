import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import ReduxProvider from './providers/ReduxProvider'
import ChatWidget from './components/ChatWidget'

export const metadata: Metadata = {
  title: 'Data Scube',
  description: 'Data Scube Application',
  icons: {
    icon: '/assets/images/logo_datascube.png',
    apple: '/assets/images/logo_datascube.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        <ReduxProvider>
          {children}
          <ChatWidget />
        </ReduxProvider>
      </body>
    </html>
  )
}
