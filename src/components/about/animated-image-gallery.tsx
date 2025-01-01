import { useEffect, useRef, useState } from 'react'

const AnimatedImageGallery = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 640)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isDesktop || !isLoaded) return

    imageRefs.forEach((ref, index) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove('opacity-0', 'translate-y-8')
          ref.current.classList.add('opacity-100', 'translate-y-0')
        }
      }, index * 150)
    })
  }, [isDesktop, isLoaded])

  useEffect(() => {
    if (isDesktop) return

    const mobileAnimatedRefs = [imageRefs[2], imageRefs[4]]

    const observers = mobileAnimatedRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && ref.current) {
              setTimeout(() => {
                if (ref.current) {
                  ref.current.classList.remove(
                    'opacity-0',
                    index === 0 ? '-translate-x-8' : 'translate-x-8',
                  )
                  ref.current.classList.add('opacity-100', 'translate-x-0')
                }
              }, index * 100)
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -10% 0px',
        },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isDesktop])

  const getInitialClasses = (index: number) => {
    if (!isLoaded) return 'opacity-0'

    if (isDesktop) {
      return 'translate-y-8 transform opacity-0 transition-all duration-700 ease-out'
    }

    if (index === 2) {
      return '-translate-x-8 transform opacity-0 transition-all duration-700 ease-out'
    }
    if (index === 4) {
      return 'translate-x-8 transform opacity-0 transition-all duration-700 ease-out'
    }
    return 'transform-none opacity-100'
  }

  return (
    <>
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <div className="relative">
          <div ref={imageRefs[0]} className={getInitialClasses(0)}>
            <img
              alt=""
              src="/about/1.webp"
              className="hidden aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg sm:block"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <div className="relative">
          <div ref={imageRefs[1]} className={getInitialClasses(1)}>
            <img
              alt=""
              src="/about/2.webp"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="relative">
          <div ref={imageRefs[2]} className={getInitialClasses(2)}>
            <img
              alt=""
              src="/about/3.webp"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        <div className="relative">
          <div ref={imageRefs[3]} className={getInitialClasses(3)}>
            <img
              alt=""
              src="/about/4.webp"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="relative">
          <div ref={imageRefs[4]} className={getInitialClasses(4)}>
            <img
              alt=""
              src="/about/5.webp"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimatedImageGallery
