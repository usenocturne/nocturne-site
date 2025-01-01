import { useEffect, useRef } from 'react'

const AnimatedImageGallery = () => {
  const imageRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    if (window.innerWidth >= 640) return

    const observers = imageRefs.map((ref, index) => {
      const threshold = 0.5 - index * 0.1

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (ref.current) {
                  ref.current.classList.remove(
                    'opacity-0',
                    'translate-x-8',
                    '-translate-x-8',
                  )
                  ref.current.classList.add('opacity-100', 'translate-x-0')
                }
              }, index * 100)
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold,
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
  }, [])

  return (
    <>
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <div className="relative">
          <img
            alt=""
            src="/about/1.webp"
            className="hidden aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg sm:block"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <div className="relative">
          <div className="sm:transform-none sm:opacity-100">
            <img
              alt=""
              src="/about/2.webp"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="relative">
          <div
            ref={imageRefs[0]}
            className="-translate-x-8 transform opacity-0 transition-all duration-700 ease-out sm:transform-none sm:opacity-100"
          >
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
          <div className="sm:transform-none sm:opacity-100">
            <img
              alt=""
              src="/about/4.webp"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="relative">
          <div
            ref={imageRefs[1]}
            className="translate-x-8 transform opacity-0 transition-all duration-700 ease-out sm:transform-none sm:opacity-100"
          >
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
