import InstallPage from '@/components/install-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install the latest version of Nocturne onto your Car Thing device. Available for multiple platforms and architectures.',
  alternates: {
    canonical: 'https://usenocturne.com/install',
  },
}

export default function Page() {
  return <InstallPage />
}