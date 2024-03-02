import { ServerThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import Providers from './providers'
import { generalInfo } from '@/data/info'
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: `${generalInfo.name} - ${generalInfo.jobTitle}`,
   description: generalInfo.about
}

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   return (
      <ServerThemeProvider attribute='class'>
         <html lang='en'>
            <body className={inter.className}>
               <Providers>
                  {children}
                  <Analytics />
               </Providers>
            </body>
         </html>
      </ServerThemeProvider>
   )
}
