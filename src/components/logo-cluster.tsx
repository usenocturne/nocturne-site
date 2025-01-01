'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Mark } from './logo'

function Circle({
  size,
  delay,
  opacity,
  isInView,
  isMobile,
}: {
  size: number
  delay: number
  opacity: string
  isInView: boolean
  isMobile: boolean
}) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay,
          },
        },
      }}
      initial="idle"
      animate={isMobile && isInView ? 'active' : undefined}
      whileHover={!isMobile ? 'active' : undefined}
      style={{ '--opacity': opacity } as React.CSSProperties}
      className={clsx(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.blue.500)_var(--opacity),transparent)_100%)]',
        'ring-1 ring-inset ring-blue-500/[8%]',
      )}
    />
  )
}

function Circles({
  isInView,
  isMobile,
}: {
  isInView: boolean
  isMobile: boolean
}) {
  return (
    <div className="absolute inset-0">
      <Circle
        size={528}
        opacity="3%"
        delay={0.45}
        isInView={isInView}
        isMobile={isMobile}
      />
      <Circle
        size={400}
        opacity="5%"
        delay={0.3}
        isInView={isInView}
        isMobile={isMobile}
      />
      <Circle
        size={272}
        opacity="5%"
        delay={0.15}
        isInView={isInView}
        isMobile={isMobile}
      />
      <Circle
        size={144}
        opacity="10%"
        delay={0}
        isInView={isInView}
        isMobile={isMobile}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-35%" />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="absolute left-44 top-32 flex size-16 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5">
      <Mark className="h-9 fill-[#b0b0b0]" />
    </div>
  )
}

function Logo({
  src,
  left,
  top,
  hover,
  isInView,
  isMobile,
}: {
  src: string
  left: number
  top: number
  hover: { x: number; y: number; rotate: number; delay: number }
  isInView: boolean
  isMobile: boolean
}) {
  return (
    <motion.img
      variants={{
        idle: { x: 0, y: 0, rotate: 0 },
        active: {
          x: [0, hover.x, 0],
          y: [0, hover.y, 0],
          rotate: [0, hover.rotate, 0],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay: hover.delay,
          },
        },
      }}
      initial="idle"
      animate={isMobile && isInView ? 'active' : undefined}
      whileHover={!isMobile ? 'active' : undefined}
      alt=""
      src={src}
      style={{ left, top } as React.CSSProperties}
      className="absolute size-16 rounded-full bg-white shadow ring-1 ring-black/5"
    />
  )
}

export function LogoCluster() {
  const [isInView, setIsInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const hasAnimated = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 640)
  }, [])

  useEffect(() => {
    if (!isMobile || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsInView(true)
            hasAnimated.current = true
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isMobile])

  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles isInView={isInView} isMobile={isMobile} />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        <Logo
          src="/logo-cluster/supabase.svg"
          left={360}
          top={144}
          hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
          isInView={isInView}
          isMobile={isMobile}
        />
        <Logo
          src="/logo-cluster/nextjs.svg"
          left={285}
          top={20}
          hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
          isInView={isInView}
          isMobile={isMobile}
        />
        <Logo
          src="/logo-cluster/cloudflare.svg"
          left={255}
          top={210}
          hover={{ x: 3, y: 5, rotate: 7, delay: 0.2 }}
          isInView={isInView}
          isMobile={isMobile}
        />
        <Logo
          src="/logo-cluster/workers.svg"
          left={144}
          top={40}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
          isInView={isInView}
          isMobile={isMobile}
        />
        <Logo
          src="/logo-cluster/spotify.svg"
          left={36}
          top={56}
          hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
          isInView={isInView}
          isMobile={isMobile}
        />
        <Logo
          src="/logo-cluster/postgresql.svg"
          left={96}
          top={176}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
          isInView={isInView}
          isMobile={isMobile}
        />
      </div>
    </div>
  )
}
