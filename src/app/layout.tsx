import GoogleAnalytics from '@/components/google-analytics'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { getLatestCommitDate } from './lib/getLastModified'

export const metadata: Metadata = {
  title: {
    template: '%s - Nocturne',
    default: "Nocturne - Your Car Thing's Second Chapter",
  },
  description:
    'When Spotify ended support, we created a new beginning. Join our growing community of users giving their Car Thing a second life with our free, open source solution.',
  metadataBase: new URL('https://usenocturne.com/'),
  alternates: {
    canonical: 'https://usenocturne.com',
  },
  keywords: [
    'Nocturne',
    'Car Thing',
    'Car Thing Mod',
    'Car Thing Hack',
    'Spotify Car Thing',
    'Spotify Car Thing Mod',
    'Spotify Car Thing Hack',
  ],
  authors: [{ name: 'Nocturne Team' }],
  creator: 'Nocturne Team',
  publisher: 'Nocturne',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Nocturne',
    url: 'https://usenocturne.com/',
    title: "Nocturne - Your Car Thing's Second Chapter",
    description:
      'When Spotify ended support, we created a new beginning. Join our growing community of users giving their Car Thing a second life with our free, open source solution.',
    locale: 'en_US',
    images: [
      {
        url: 'https://usenocturne.com/images/og-image.png',
        width: 1280,
        height: 640,
        alt: "Nocturne - Your Car Thing's Second Chapter",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nocturne - Your Car Thing's Second Chapter",
    description:
      'When Spotify ended support, we created a new beginning. Join our growing community of users giving their Car Thing a second life with our free, open source solution.',
    images: ['https://usenocturne.com/images/og-image.png'],
  },
  other: {
    wikidata: 'Q131441227',
    wikipedia: 'https://wikipedia.org/wiki/Nocturne_(software)',
  },
}

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nocturne',
  description:
    'When Spotify ended support, we created a new beginning. Join our growing community of users giving their Car Thing a second life with our free, open source solution.',
  applicationCategory: ['Multimedia', 'MusicPlayer'],
  operatingSystem: 'Cross-platform',
  softwareVersion: '2.1.2',
  downloadUrl: 'https://github.com/usenocturne/nocturne-image/releases/latest',
  isAccessibleForFree: true,
  installUrl: 'https://usenocturne.com/installation',
  softwareRequirements:
    'Spotify Car Thing, Raspberry Pi, Spotify Premium account',
  sameAs: [
    'https://wikipedia.org/wiki/Nocturne_(software)',
    'https://www.wikidata.org/wiki/Q131441227',
    'https://github.com/usenocturne',
    'https://discord.gg/GTP9AawHPt',
  ],
  author: {
    '@type': 'Organization',
    name: 'Nocturne Team',
    url: 'https://usenocturne.com/',
  },
  license: 'https://opensource.org/licenses/MIT',
  datePublished: '2024-09-22',
  dateModified: await getLatestCommitDate(),
  keywords: [
    'Car Thing',
    'Spotify',
    'Music Player',
    'Open Source',
    'Car Entertainment',
  ],
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nocturne',
  url: 'https://usenocturne.com',
  logo: 'https://usenocturne.com/images/logo.png',
  foundingDate: '2024-09-22',
  sameAs: [
    'https://wikipedia.org/wiki/Nocturne_(software)',
    'https://www.wikidata.org/wiki/Q131441227',
    'https://github.com/usenocturne',
    'https://discord.gg/GTP9AawHPt',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'support',
    url: 'https://discord.gg/GTP9AawHPt',
  },
  knowsAbout: [
    'Spotify Car Thing',
    'Open Source Software',
    'Car Entertainment Systems',
  ],
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nocturne',
  url: 'https://usenocturne.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://usenocturne.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const jsonLdBreadcrumbList = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://usenocturne.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Installation',
      item: 'https://usenocturne.com/installation',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Support',
      item: 'https://usenocturne.com/support',
    },
  ],
}

export default async function RootLayout({
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumbList),
          }}
        />
        <script
          defer
          data-domain="usenocturne.com"
          src="https://p.itsnebula.net/js/script.js"
        ></script>
      </head>
      <body className="text-gray-950 antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
