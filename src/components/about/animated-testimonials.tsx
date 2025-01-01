import { useEffect, useRef } from 'react'

interface TestimonialAuthor {
  name: string
  handle: string
  imageUrl: string
}

interface Testimonial {
  body: string
  author: TestimonialAuthor
  href: string
}

interface AnimatedTestimonialProps {
  testimonial: Testimonial
}

const AnimatedTestimonials = ({ testimonial }: AnimatedTestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth >= 640) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (testimonialRef.current) {
              testimonialRef.current.classList.remove(
                'opacity-0',
                'translate-y-8',
              )
              testimonialRef.current.classList.add(
                'opacity-100',
                'translate-y-0',
              )
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={testimonialRef}
      className="translate-y-8 transform pt-8 opacity-0 transition-all duration-700 ease-out sm:inline-block sm:w-full sm:transform-none sm:px-4 sm:opacity-100"
    >
      <a target="_blank" href={testimonial.href}>
        <figure className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 text-sm/6">
          <blockquote className="flex-1 text-gray-900">
            <p className="h-12 overflow-hidden">{`"${testimonial.body}"`}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-x-4">
            <img
              alt=""
              src={testimonial.author.imageUrl}
              className="size-10 rounded-full bg-gray-50"
            />
            <div>
              <div className="font-semibold text-gray-900">
                {testimonial.author.name}
              </div>
              <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
            </div>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}

export default AnimatedTestimonials
