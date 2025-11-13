import type { Metadata } from 'next'
import '../styles/globals.css'
import ReduxProvider from './providers/ReduxProvider'
import ChatWidget from './components/ChatWidget'

export const metadata: Metadata = {
  title: 'Data Scube',
  description: 'Data Scube Application',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0f172a',
  icons: {
    icon: '/assets/images/logo_datascube.png',
    apple: '/assets/images/logo_datascube.png',
  },
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
