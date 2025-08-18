import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Ravishek Ranjan',
    default: 'Ravishek Ranjan - Data Engineer.',
  },
  description:
    'I’m a Data Engineer from India, passionate about designing and building fast, scalable, and reliable data pipelines and systems. I enjoy exploring new technologies in the data ecosystem, staying updated with industry trends, and continuously improving my ability to deliver efficient, accessible, and impactful data solutions.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
