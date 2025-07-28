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
import { ThemeProvider } from '@/components/theme-provider'
import { HeroColorsProvider } from '@/contexts/hero-colors-context'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import dynamic from 'next/dynamic'
import 'prismjs/themes/prism.css'
import { useEffect, useRef, useState } from 'react'

const CodeBlock = dynamic(() => import('@/components/code-block'), {
  ssr: false,
})

function Hero({ onColorsChange }: { onColorsChange: (colors: string[]) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentColors, setCurrentColors] = useState(['#7456c1', '#fa6767', '#ff4d4a', '#7456c1'])

  const heroData = [
    { image: '/images/nocturne-hero-1.png', colors: ['#7456c1', '#fa6767', '#ff4d4a', '#7456c1'] },
    { image: '/images/nocturne-hero-2.png', colors: ['#df6c22', '#9c4c15', '#c25d16', '#f06707'] },
    { image: '/images/nocturne-hero-3.png', colors: ['#df943a', '#976628', '#b27b32', '#b58437'] },
    { image: '/images/nocturne-hero-4.png', colors: ['#dcac89', '#a67343', '#b77e47', '#e18a2f'] },
    { image: '/images/nocturne-hero-5.png', colors: ['#8299a8', '#414e52', '#55656a', '#333a36'] },
    { image: '/images/nocturne-hero-6.png', colors: ['#9dba8a', '#4d5e53', '#57685e', '#2c384d'] },
    { image: '/images/nocturne-hero-7.png', colors: ['#8f8338', '#353821', '#4b4d2c', '#1c2a29'] },
    { image: '/images/nocturne-hero-8.png', colors: ['#8cb8d1', '#2f6080', '#4888b2', '#0c63a3'] },
    { image: '/images/nocturne-hero-9.png', colors: ['#3b607e', '#1c3448', '#274662', '#071931'] },
    { image: '/images/nocturne-hero-10.png', colors: ['#3B518B', '#202F57', '#142045', '#151231'] },
  ]

  const generateMeshGradient = (colors: string[]) => {
    const positions = ["at 0% 25%", "at 25% 0%", "at 100% 75%", "at 75% 100%"]
    const radialGradients = positions.map((position, index) => {
      const color = colors[index % colors.length]
      return `radial-gradient(${position}, ${color} 0%, transparent 80%)`
    })
    return radialGradients.join(", ")
  }

  const interpolateColor = (color1: string, color2: string, factor: number) => {
    const c1 = parseInt(color1.slice(1), 16)
    const c2 = parseInt(color2.slice(1), 16)

    const r1 = (c1 >> 16) & 255
    const g1 = (c1 >> 8) & 255
    const b1 = c1 & 255

    const r2 = (c2 >> 16) & 255
    const g2 = (c2 >> 8) & 255
    const b2 = c2 & 255

    const r = Math.round(r1 + (r2 - r1) * factor)
    const g = Math.round(g1 + (g2 - g1) * factor)
    const b = Math.round(b1 + (b2 - b1) * factor)

    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetColors = heroData[currentIndex].colors
    const startColors = [...currentColors]
    const startTime = Date.now()
    const duration = 2000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2

      const newColors = startColors.map((startColor, index) => {
        const targetColor = targetColors[index] || targetColors[targetColors.length - 1]
        return interpolateColor(startColor, targetColor, easeProgress)
      })

      setCurrentColors(newColors)
      onColorsChange(newColors)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [currentIndex, onColorsChange])

  return (
    <div className="relative bg-white dark:bg-slate-950">
      <div
        className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5"
        style={{
          background: generateMeshGradient(currentColors),
        }}
      />

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
        <div className="pt-2 sm:pt-24">
          <h1 className="font-display text-balance text-head/[0.9] font-medium leading-[50px] tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Your Car Thing's second chapter.
          </h1>
          <p className="mt-6 max-w-2xl text-xl/7 font-medium text-white/90 sm:mt-8 sm:text-2xl/8">
            When Spotify ended support, we created a new beginning. Join our
            growing community of users giving their Car Thing a second life with
            Nocturne.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://usenocturne.com/download">
              Get Started
              <ChevronRightIcon className="mt-0.5 size-4" />
            </Button>
          </div>
          <div className="relative mt-12 h-[150px] overflow-hidden sm:h-[450px]">
            {heroData.map((item, index) => (
              <img
                key={index}
                src={item.image}
                className={`pointer-events-none absolute left-1/2 w-full -translate-x-1/2 object-contain transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                  } ${index === 0 ? 'animate-fade-up' : ''
                  }`}
              />
            ))}
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
          className="z-10 !overflow-visible lg:col-span-2 lg:rounded-bl-4xl"
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
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (ctaRef.current) {
              ctaRef.current.classList.remove('opacity-0', 'scale-95')
              ctaRef.current.classList.add('opacity-100', 'scale-100')
            }
            if (imageRef.current) {
              setTimeout(() => {
                if (imageRef.current) {
                  imageRef.current.classList.remove(
                    'opacity-0',
                    'translate-x-8',
                  )
                  imageRef.current.classList.add('opacity-100', 'translate-x-0')
                }
              }, 200)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Container>
      <Subheading>Support Nocturne</Subheading>
      <Heading as="h3" className="mt-2 max-w-[300px] sm:max-w-2xl">
        Power Car Thing's next chapter.
      </Heading>

      <div className="mt-10 pb-20 sm:mt-16">
        <div
          ref={ctaRef}
          className="transform opacity-0 transition-all duration-700 ease-out"
        >
          <div className="relative isolate h-auto overflow-hidden rounded-3xl bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-[#52349e] via-[#fa6767] via-[70%] to-[#ff4d4a] px-6 pb-0 pt-16 shadow-sm ring-1 ring-black/5 data-[dark]:bg-gray-800 data-[dark]:ring-white/15 sm:px-16 md:pt-24 lg:flex lg:h-[380px] lg:items-center lg:gap-x-20 lg:pb-0 lg:pl-16 lg:pr-20 lg:pt-0">
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
                ref={imageRef}
                alt="Nocturne Screenshot"
                src="/images/nocturne-2.png"
                className="pointer-events-none absolute top-0 w-[41rem] max-w-none translate-x-8 transform rounded-md opacity-0 transition-all duration-700 ease-out sm:left-6 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  const [heroColors, setHeroColors] = useState(['#7456c1', '#fa6767', '#ff4d4a', '#7456c1'])

  return (
    <div className="overflow-hidden">
      <ThemeProvider />
      <HeroColorsProvider colors={heroColors}>
        <Hero onColorsChange={setHeroColors} />
        <main>
          <div className="bg-gradient-to-b from-white from-50% to-gray-100 pt-8 sm:pt-20 dark:from-zinc-950 dark:from-50% dark:to-zinc-950">
            <BentoSection />
            <Testimonials />
            <SupportCTA />
          </div>
        </main>
        <Footer />
      </HeroColorsProvider>
    </div>
  )
}
