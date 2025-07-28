'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, SubSectionTitle } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  assets: Array<{
    name: string
    size: number
    download_count: number
    browser_download_url: string
  }>
}

function Hero() {
  return (
    <div className="relative dark:bg-zinc-950">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 sm:h-[35rem] dark:ring-white/10" />
      <Container className="relative px-8 sm:px-0">
        <Navbar
          banner={
            <Link
              href="https://github.com/usenocturne/nocturne"
              className="duration-350 flex items-center gap-1 rounded-full bg-gray-950/40 px-3 py-0.5 text-sm/6 font-medium text-white transition ease-in-out data-[hover]:bg-gray-950/30"
            >
              Nocturne 3.0.0 Now Available
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-2 xl:pb-16 sm:pt-24">
          <h1 className="font-display text-balance text-head/[0.9] font-medium leading-[50px] tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Install Nocturne
          </h1>
          <p className="mt-4 max-w-2xl text-xl/7 font-medium text-white/90 sm:mt-8 pb-16 sm:pb-32 sm:text-2xl/8">
            Flash Nocturne, connect to Spotify, and join
            thousands of users who've given their Car Thing a second life.
          </p>
        </div>
      </Container>
    </div>
  )
}

function ReleasesTable({ releases }: { releases: GitHubRelease[] }) {
  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(2)} MB`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  }

  if (releases.length === 0) return null

  const latestRelease = releases[0]
  const mainAsset = latestRelease.assets[0]

  return (
    <div className="not-prose mt-8">
      {mainAsset && (
        <div
          className="overflow-hidden rounded-xl border border-gray-300 dark:border-zinc-700/50"
          style={{
            background: 'linear-gradient(135deg, #7456c1/10 0%, #fa6767/8 50%, #ff4d4a/10 100%)'
          }}
        >
          <div className="px-6 py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{
                      background: 'linear-gradient(135deg, #7456c1/15 0%, #fa6767/15 100%)'
                    }}
                  >
                    <ArrowDownTrayIcon className="h-6 w-6" style={{ color: '#7456c1' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {latestRelease.name || latestRelease.tag_name} (zip)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Firmware installer • {formatFileSize(mainAsset.size)} • {formatDate(latestRelease.published_at)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={mainAsset.browser_download_url}
                  download
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
                  Download
                </a>
                <button
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
                  style={{
                    background: 'linear-gradient(135deg, #7456c1 0%, #fa6767 100%)'
                  }}
                  title="Coming soon"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Flash with Terbium
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Downloads() {
  const [releases, setReleases] = useState<GitHubRelease[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch('https://api.github.com/repos/usenocturne/nocturne/releases')
        if (!response.ok) {
          throw new Error('Failed to fetch releases')
        }
        const data: GitHubRelease[] = await response.json()
        setReleases(data)
      } catch (err) {
        setError('Failed to load releases. Please try again later.')
        console.error('Error fetching releases:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchReleases()
  }, [])

  return (
    <Container>
      <div className="prose prose-lg mx-auto max-w-7xl [&>*]:text-gray-800 dark:[&>*]:text-white [&>h2]:mb-8 [&>h2]:mt-12">
        <Heading as="h2">Latest Release</Heading>
        <p className="dark:text-gray-300">
          If not flashing directly with <a
            href="https://terbium.app"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Terbium
          </a> (recommended), download the latest Nocturne firmware installer zip file. You can use this file to begin the installation process manually.
        </p>

        {loading ? (
          <div className="not-prose flex items-center justify-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading releases...</span>
          </div>
        ) : error ? (
          <div className="not-prose py-4">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <ReleasesTable releases={releases} />
        )}

        <Heading as="h2">Requirements</Heading>
        <ul className="not-prose dark:text-gray-300">
          <li>
            Terbium driver is required on Windows. Run{' '}
            <code className="bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              irm https://driver.terbium.app/get | iex
            </code>{' '}
            in PowerShell.
          </li>
        </ul>

        <Heading as="h2">Installation Instructions</Heading>
        <SubSectionTitle as="h3">Flashing the Firmware</SubSectionTitle>
        <p className="dark:text-gray-300">
          <strong className="text-red-600 dark:text-red-400">Warning:</strong> Bricking the Car Thing is nearly impossible, but the risk is always there when flashing custom firmware.
        </p>
        <ol className="dark:text-gray-300">
          <li>Use the "Flash with Terbium" button above to download and flash the firmware automatically, or download the zip file and follow the instructions on{' '}
            <a
              href="https://terbium.app"
              className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Terbium
            </a>
          </li>
          <li>When prompted, plug in your Car Thing's USB while holding buttons 1+4 (the top buttons)</li>
        </ol>
        <p className="dark:text-gray-300">
          Flashing will take about 10 minutes, depending on your USB ports. Try multiple ports if one isn't working (Rear IO USB 3/2, BIOS flash port if on AMD, etc).
        </p>

        <SubSectionTitle as="h3">Setting up Network Connection</SubSectionTitle>
        <p className="dark:text-gray-300">
          After flashing, you'll need to connect your Car Thing to the internet. Choose one of the following connection methods:
        </p>

        <div className="not-prose mt-6 space-y-4">
          <details className="group rounded-lg border border-gray-200 dark:border-zinc-700">
            <summary className="flex cursor-pointer items-center gap-3 px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800">
              Bluetooth (recommended)
              <svg className="ml-auto h-4 w-4 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="border-t border-gray-200 p-4 dark:border-zinc-700">
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                Since Nocturne 3.0.0, Bluetooth via tethering is supported. Your phone plan must support hotspot.
              </p>
              <ol className="mb-3 list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>While on the Connection Lost screen, connect to <code className="bg-gray-100 px-1 py-0.5 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">Nocturne (XXXX)</code> from your phone (XXXX being the last 4 characters of your Car Thing's serial number)</li>
                <li>Enable Bluetooth tethering on your phone:
                  <ul className="mt-1 ml-4 list-disc list-inside space-y-1">
                    <li>iOS: Turn on Personal Hotspot</li>
                    <li>Android: Turn on hotspot and/or Bluetooth tethering</li>
                  </ul>
                </li>
              </ol>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                <strong>Tip:</strong> Make sure your Car Thing is not connected to a computer, as this conflicts with Bluetooth.
              </p>
            </div>
          </details>

          <details className="group rounded-lg border border-gray-200 dark:border-zinc-700">
            <summary className="flex cursor-pointer items-center gap-3 px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800">
              Nocturne Connector (recommended)
              <svg className="ml-auto h-4 w-4 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="border-t border-gray-200 p-4 dark:border-zinc-700">
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                Nocturne Connector requires a Raspberry Pi, but adds Wi-Fi support to your Car Thing while it's connected to the Pi.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                See more on the{' '}
                <a
                  href="https://github.com/usenocturne/nocturne-connector"
                  className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Nocturne Connector GitHub
                </a>
                .
              </p>
            </div>
          </details>

          <details className="group rounded-lg border border-gray-200 dark:border-zinc-700">
            <summary className="flex cursor-pointer items-center gap-3 px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800">
              Windows
              <svg className="ml-auto h-4 w-4 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="border-t border-gray-200 p-4 dark:border-zinc-700">
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                The Car Thing running Nocturne presents itself as a virtual network adapter. With some configuration, you can share your internet connection to the Car Thing via USB tethering.
              </p>
              <p className="mb-3 text-sm font-medium text-amber-700 dark:text-amber-300">
                <strong>Windows 10/11 Pro or Enterprise is required</strong>. If you are on Home, you may configure the adapter manually via the Network and Sharing Center GUI.
              </p>
              <ol className="mb-3 list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Connect the Car Thing to your PC</li>
                <li>Run the following commands in an elevated PowerShell terminal:</li>
              </ol>
              <div className="mb-3 rounded bg-gray-900 p-3">
                <pre className="text-xs text-green-400">
                  {`$ctNic = (Get-NetAdapter -InterfaceDescription "*NDIS*")

$ctNic | Set-NetIPAddress -IPAddress 172.16.42.1 -PrefixLength 24

New-NetNat -Name "CarThing" -InternalIPInterfaceAddressPrefix 172.16.42.0/24`}
                </pre>
              </div>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                <strong>Tip:</strong> If you get an error akin to a duplicate name being in use, you may need to identify conflicts on your system with <code className="bg-gray-100 px-1 py-0.5 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">Get-VMSwitch</code>. If you do not have that command installed, you will need to install the Hyper-V optional Windows feature, following a reboot, with: <code className="bg-gray-100 px-1 py-0.5 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">Get-WindowsOptionalFeature -Online | Where-Object FeatureName -like '*Hyper-V*'</code>.
              </p>
            </div>
          </details>
        </div>

        <Heading as="h2">Need Help?</Heading>
        <p className="dark:text-gray-300">
          Having trouble with installation? Check out our resources:
        </p>
        <ul className="dark:text-gray-300">
          <li>
            <a
              href="https://github.com/usenocturne/nocturne/blob/main/README.md"
              className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Complete setup guide on GitHub
            </a>
          </li>
          <li>
            <a
              href="https://github.com/usenocturne/nocturne/issues"
              className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Report issues or get help
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/GTP9AawHPt"
              className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Join our Discord community
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default function DownloadPage() {
  return (
    <div className="overflow-hidden dark:bg-zinc-950">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pb-20 dark:from-zinc-950 dark:from-50% dark:to-zinc-950">
          <Downloads />
        </div>
      </main>
      <Footer />
    </div>
  )
}