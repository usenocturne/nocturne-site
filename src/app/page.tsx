'use client'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { InterstateRows } from '@/components/interstate-rows'
import LeftCodeTabs from '@/components/left-code-tabs'
import { Link } from '@/components/link'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import RightCodeTabs from '@/components/right-code-tabs'
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
        <div className="pt-2 sm:pt-24">
          <h1 className="font-display text-balance text-head/[0.9] font-medium leading-[50px] tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Your Car Thing's second chapter.
          </h1>
          <p className="mt-6 max-w-2xl text-xl/7 font-medium text-white/90 sm:mt-8 sm:text-2xl/8">
            When Spotify ended support, we created a new beginning. Join our
            growing community of users giving their Car Thing a second life with
            our free, open source solution.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/installation">
              Get Started
              <ChevronRightIcon className="mt-0.5 size-4" />
            </Button>
          </div>
          <div className="relative mt-12 h-[150px] overflow-hidden sm:h-[450px]">
            <img
              src="/images/nocturne.png"
              className="pointer-events-none absolute left-1/2 w-full -translate-x-1/2 animate-fade-up object-contain opacity-0"
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
          graphic={<LeftCodeTabs />}
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Simple"
          title="Easy Setup"
          description="Get up and running in minutes with our step-by-step installation guide and community support."
          graphic={<RightCodeTabs />}
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

function SupportCTA() {
  return (
    <Container>
      <Subheading>Support Nocturne</Subheading>
      <Heading as="h3" className="mt-2 max-w-[300px] sm:max-w-2xl">
        Power Car Thing's next chapter.
      </Heading>

      <div className="mt-10 pb-20 sm:mt-16">
        <div className="relative isolate h-auto overflow-hidden rounded-3xl bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-[#7456c1] via-[#fa6767] via-[70%] to-[#ff4d4a] px-6 pb-0 pt-16 shadow-sm ring-1 ring-black/5 data-[dark]:bg-gray-800 data-[dark]:ring-white/15 sm:px-16 md:pt-24 lg:flex lg:h-[380px] lg:items-center lg:gap-x-20 lg:pb-0 lg:pl-16 lg:pr-20 lg:pt-0">
          <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:text-left">
            <h4 className="text-balance text-3xl font-medium tracking-tight text-white group-data-[dark]:text-white">
              Choose Your Support Method
            </h4>
            <p className="mt-4 text-pretty text-lg/8 text-white">
              Nocturne is a community-driven initiative. If you find it
              valuable, consider supporting our work through a donation. All
              contributions go towards development and maintenance.
            </p>
            <Link href="/about">
              <p className="duration-350 mt-4 text-pretty text-lg/8 text-white/80 transition ease-in-out hover:text-white/60">
                Learn more about our mission →
              </p>
            </Link>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-start">
              <div className="w-full sm:w-[220px]">
                <Button
                  href="https://buymeacoffee.com/brandonsaldan"
                  className="w-full"
                >
                  Buy Me a Coffee
                </Button>
              </div>
              <div className="w-full sm:w-[220px]">
                <Button
                  href="https://ko-fi.com/brandonsaldan"
                  className="w-full"
                >
                  Ko-Fi
                </Button>
              </div>
            </div>
          </div>

          <div className="relative mt-8 h-64 sm:h-80 lg:mt-2">
            <img
              alt="Nocturne Screenshot"
              src="/images/nocturne-2.png"
              width={1824}
              height={1080}
              className="pointer-events-none absolute top-0 w-[41rem] max-w-none rounded-md sm:left-6 sm:w-[57rem]"
            />
          </div>
        </div>
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
          <SupportCTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
