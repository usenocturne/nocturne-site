import AboutPage from '@/components/about-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The team behind Nocturne and our mission to give Car Thing hardware a second life.',
  alternates: {
    canonical: 'https://usenocturne.com/about',
  },
}

export default function Page() {
  return <AboutPage />
}
