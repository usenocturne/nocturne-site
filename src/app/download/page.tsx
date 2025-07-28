import DownloadPage from '@/components/download-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download',
  description:
    'Download the latest version of Nocturne for your Car Thing device. Available for multiple platforms and architectures.',
  alternates: {
    canonical: 'https://usenocturne.com/download',
  },
}

export default function Page() {
  return <DownloadPage />
}