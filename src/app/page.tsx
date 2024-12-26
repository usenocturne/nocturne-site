'use client'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { InterstateRows } from '@/components/interstate-rows'
import { Link } from '@/components/link'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import dynamic from 'next/dynamic'
import 'prismjs/themes/prism.css'

const CodeBlock = dynamic(() => import('@/components/code-block'), {
  ssr: false,
})

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative px-8 sm:px-0">
        <Navbar
          banner={
            <Link
              href="https://github.com/usenocturne/nocturne-image"
              className="duration-350 flex items-center gap-1 rounded-full bg-gray-950/40 px-3 py-0.5 text-sm/6 font-medium text-white transition ease-in-out data-[hover]:bg-gray-950/30"
            >
              Nocturne Public Beta Now Available
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-2 sm:pt-24 md:pt-32">
          <h1 className="font-display text-balance text-head/[0.9] font-medium leading-[50px] tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Your Car Thing's second chapter.
          </h1>
          <p className="mt-6 max-w-2xl text-xl/7 font-medium text-white/90 sm:mt-8 sm:text-2xl/8">
            When Spotify ended support, we created a new beginning. Join our
            growing community of users giving their Car Thing a second life with
            our free, open source solution.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:mt-12 sm:flex-row">
            <Button href="/installation">
              Get Started
              <ChevronRightIcon className="mt-0.5 size-4" />
            </Button>
          </div>
          <div className="relative mt-12 h-[150px] overflow-hidden sm:h-[450px]">
            <img
              src="/images/nocturne.png"
              className="absolute left-1/2 w-full -translate-x-1/2 animate-fade-up object-contain opacity-0"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Nocturne is the Car Thing mod you've been waiting for.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Free"
          title="Open Source"
          description="Built by the community, for the community. Always free and open source."
          graphic={
            <div className="relative px-6 pt-8 md:pr-0">
              <div className="mx-auto h-72 max-w-2xl overflow-hidden bg-texture-1 bg-cover md:mx-0 md:max-w-none">
                <div className="relative w-screen overflow-hidden rounded-tl-xl bg-white/60 shadow-sm backdrop-blur-xl">
                  <div className="absolute inset-0 rounded-tl-xl border-l-4 border-gray-50" />
                  <div className="relative flex bg-gray-50">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-600">
                      <div className="rounded-tl-xl border-b border-l-4 border-r border-t-4 border-b-blue-500 border-l-gray-50 border-r-gray-200 border-t-gray-50 bg-white px-4 py-2 text-blue-600">
                        playlistService.jsx
                      </div>
                      <div className="border-r border-t-4 border-gray-200 border-t-gray-50 px-4 py-2">
                        artistService.jsx
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <CodeBlock
                      code={`export const fetchUserPlaylists = async (accessToken, setPlaylists, updateGradientColors, handleError) => {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const validPlaylists = data.items.filter(item => item && item.id);
      if (validPlaylists.length > 0) {
        const imageUrl = validPlaylists[0].images[0]?.url;
        if (imageUrl) {
          localStorage.setItem("libraryImage", imageUrl);
          updateGradientColors(imageUrl, "library");
        }
      }
      setPlaylists(validPlaylists);
    } else {
      console.error("Error fetching user playlists:", response.status);
    }
  } catch (error) {
    console.error("Error fetching user playlists:", error.message);
  }
};`}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Simple"
          title="Easy Setup"
          description="Get up and running in minutes with our step-by-step installation guide and community support."
          graphic={
            <div className="relative px-6 pt-8 md:pl-0">
              <div className="mx-auto h-72 max-w-2xl overflow-hidden rounded-tr-xl bg-texture-2 bg-cover md:mx-0 md:max-w-none">
                <div className="relative w-full overflow-hidden rounded-tr-xl bg-white/60 shadow-sm backdrop-blur-xl">
                  <div className="absolute inset-0 rounded-tr-xl border-r-4 border-gray-50" />
                  <div className="relative flex bg-gray-50">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-600">
                      <div className="border-r border-t-4 border-gray-200 border-t-gray-50 px-4 py-2">
                        setup_hotspot.py
                      </div>
                      <div className="rounded-tr-xl border-b border-t-4 border-b-blue-500 border-l-gray-200 border-r-gray-50 border-t-gray-50 bg-white px-4 py-2 text-blue-600">
                        README.md
                      </div>
                    </div>
                  </div>
                  <pre className="whitespace-normal px-4 pt-4 text-sm text-[#383A42]">
                    <code className="block whitespace-pre-wrap break-words pb-4">
                      If you haven't already, download superbird-tool and run
                      the setup process detailed here.
                    </code>
                    <code className="block whitespace-pre-wrap break-words pb-4">
                      Download and unzip the latest image from Releases, connect
                      Car Thing to your computer in USB Mode (hold preset
                      buttons 1 and 4 while connecting), and run the following
                      from your command line:
                    </code>
                    <code className="block whitespace-pre-wrap break-words">
                      # Go into the superbird-tool repository
                    </code>
                    <code className="block whitespace-pre-wrap break-words pb-2">
                      $ cd C:\path\to\superbird-tool-main
                    </code>
                    <code className="block whitespace-pre-wrap break-words">
                      # Find device
                    </code>
                    <code className="block whitespace-pre-wrap break-words pb-2">
                      $ python superbird_tool.py --find_device
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Flexible"
          title="Desk or Car"
          description="Use your Car Thing at your desk or take it on the road."
          graphic={<InterstateRows />}
          className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Stable"
          title="Rock Solid"
          description="Built on proven technologies and best practices for a dependable experience you can count on."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Active"
          title="Regular Updates"
          description="Continuous improvements and new features through our active development community."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pt-20">
          <BentoSection />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  )
}