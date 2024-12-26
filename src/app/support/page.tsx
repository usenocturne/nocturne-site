'use client'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, SubSectionTitle } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 sm:h-[35rem]" />
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
            Support Nocturne
          </h1>
          <p className="mt-4 max-w-2xl pb-12 text-xl/7 font-medium text-white/90 sm:mt-8 sm:pb-32 sm:text-2xl/8">
            Every donation directly supports development, hosting, and community
            resources. Join us in keeping the Car Thing alive and thriving.
          </p>
        </div>
      </Container>
    </div>
  )
}

function Support() {
  return (
    <Container>
      <div className="prose prose-lg mx-auto max-w-7xl [&>*]:text-gray-800 [&>h2]:mb-8 [&>h2]:mt-12">
        <Heading as="h2">Why Support Nocturne?</Heading>
        <p>
          Nocturne is powered by a passionate community of developers and Car
          Thing enthusiasts. Your donations help us maintain the infrastructure,
          develop new features, and provide support to users worldwide. By
          contributing, you're directly helping keep this project alive and
          ensuring Car Thing devices continue to have a purpose.
        </p>

        <Heading as="h2">Ways to Support</Heading>
        <SubSectionTitle as="h2">One-Time Donations</SubSectionTitle>
        <p>
          Make a one-time contribution through{' '}
          <a
            href="https://buymeacoffee.com/brandonsaldan"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800"
          >
            Buy Me A Coffee
          </a>
          , or{' '}
          <a
            href="https://ko-fi.com/brandonsaldan"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800"
          >
            Ko-Fi
          </a>{' '}
          to help fund project needs or show your appreciation for Nocturne.
        </p>

        <SubSectionTitle as="h2">Contributing Code</SubSectionTitle>
        <p>
          We welcome contributions from developers of all skill levels. Check
          out our{' '}
          <a
            href="https://github.com/usenocturne"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800"
          >
            GitHub organization
          </a>{' '}
          to find issues you can help with, or propose new features.
        </p>

        <Heading as="h2">Our Commitment</Heading>
        <p>
          Nocturne will always remain free and open source. Your support helps
          ensure we can maintain this commitment while continuing to improve the
          project. Every contribution, no matter the size, makes a difference in
          keeping Nocturne thriving.
        </p>

        <p>
          Questions about supporting Nocturne? Reach out on our{' '}
          <a
            href="https://discord.gg/GTP9AawHPt"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800"
          >
            Discord server
          </a>
          .
        </p>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pb-20">
          <Support />
        </div>
      </main>
      <Footer />
    </div>
  )
}
