import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Nocturne',
    default: "Nocturne - Your Car Thing's Second Chapter",
  },
  description: "When Spotify ended support, we created a new beginning. Join our growing community of users giving their Car Thing a second life with our free, open source solution.",
  openGraph: {
    type: 'website',
    siteName: 'Nocturne',
    url: 'https://nocturne-site.vercel.app/',
    images: [
      {
        url: 'https://nocturne-site.vercel.app/images/og-image.png',
        width: 1280,
        height: 640,
        alt: "Nocturne - Your Car Thing's Second Chapter",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://nocturne-site.vercel.app/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
