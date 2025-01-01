import { useEffect, useRef } from 'react'

interface ScrollAnimationConfig {
  threshold?: number
  delay?: number
  x?: number
  y?: number
  scale?: number
}

export function useScrollAnimation<T extends HTMLElement>(
  config: ScrollAnimationConfig = {},
) {
  const { threshold = 0.2, delay = 0, x = 0, y = 8, scale = 1 } = config

  const elementRef = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && elementRef.current) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.remove(
                  'opacity-0',
                  'translate-y-8',
                  '-translate-x-4',
                  'scale-95',
                )
                elementRef.current.classList.add(
                  'opacity-100',
                  'translate-y-0',
                  'translate-x-0',
                  'scale-100',
                )
              }
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, delay])

  return elementRef
}
