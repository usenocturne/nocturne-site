import InstallationPage from '@/components/installation-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Installation Guide',
  description:
    'Step-by-step instructions for installing Nocturne on your Car Thing. Learn how to set up Nocturne for both desk and car use, with detailed guides for Windows, macOS, and Linux.',
  alternates: {
    canonical: 'https://usenocturne.com/installation',
  },
  keywords: [
    'Nocturne installation',
    'Car Thing setup',
    'Car Thing software',
    'Car Thing hack',
    'Spotify Car Thing mod',
    'Car Thing Linux setup',
    'Car Thing Windows setup',
    'Car Thing macOS setup',
  ],
}

export default function Page() {
  return <InstallationPage />
}
