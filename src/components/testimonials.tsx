'use client'

import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: '/testimonials/luke.jpg',
    name: 'Luke Lafreniere',
    title: 'CTO, Linus Media Group',
    quote:
      'The only firmware that managed to get the Car Thing’s original features working.',
  },
  {
    img: '/testimonials/kevin.jpg',
    name: 'Kevin Purdy',
    title: 'Senior Technology Reporter, Ars Technica',
    quote:
      'A wholly redesigned Spotify interface that restores all its Spotify functionality.',
  },
  {
    img: '/testimonials/jeff.jpg',
    name: 'Jeff Acosta',
    title: 'YouTuber, Dammit Jeff',
    quote:
      'You can basically do everything from the Car Thing... It’s really impressive.',
  },
]

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  className,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
  className?: string
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className={clsx(
        'relative flex aspect-[9/16] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4]',
        className,
      )}
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              "
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              "
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fd9f7b] from-[28%] via-[#fe7e98] via-[70%] to-[#b461f9] bg-clip-text text-transparent">
              {title}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <Container>
      <div className="py-20">
        <div ref={setReferenceWindowRef}>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2">
            The reviews are in.
          </Heading>
        </div>

        <div className="mt-10 sm:mt-16">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 [scrollbar-width:none] lg:grid lg:grid-cols-6 lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map(
              ({ img, name, title, quote }, testimonialIndex) => (
                <TestimonialCard
                  key={testimonialIndex}
                  name={name}
                  title={title}
                  img={img}
                  bounds={bounds}
                  scrollX={scrollX}
                  onClick={() => scrollTo(testimonialIndex)}
                  className="w-[calc(100vw-5rem)] shrink-0 snap-start sm:w-[calc(100vw-6rem)] lg:col-span-2 lg:w-auto"
                >
                  {quote}
                </TestimonialCard>
              ),
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
