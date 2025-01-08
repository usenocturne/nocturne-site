import { clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-black/15 from-[2px] to-[2px] bg-[length:12px_100%] dark:from-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-black/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({
  label,
  src,
  className,
  isActive,
}: {
  label: string
  src: string
  className: string
  isActive: boolean
}) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 grid grid-cols-[1rem,1fr] items-center gap-2 whitespace-nowrap px-3 py-1',
        'rounded-full bg-gradient-to-t from-gray-50 from-50% to-gray-100 ring-1 ring-inset ring-white/10 dark:from-zinc-800 dark:to-zinc-800',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-timing-function:linear]',
        isActive
          ? '[animation-play-state:running]'
          : '[animation-play-state:paused]',
        'group-hover:[animation-play-state:running]',
      )}
    >
      <img alt="" src={src} className="size-4" />
      <span className="text-sm/6 font-medium text-gray-900 dark:text-white">
        {label}
      </span>
    </div>
  )
}

export function InterstateRows() {
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
      <div className="absolute inset-0 grid grid-cols-1 pt-8 [container-type:inline-size]">
        <Row>
          <Logo
            label="I-10"
            src="/interstate/I-10.svg"
            className="[animation-delay:-26s] [animation-duration:30s]"
            isActive={isMobile && isInView}
          />
          <Logo
            label="I-95"
            src="/interstate/I-95.svg"
            className="[animation-delay:-8s] [animation-duration:30s]"
            isActive={isMobile && isInView}
          />
        </Row>
        <Row>
          <Logo
            label="I-90"
            src="/interstate/I-90.svg"
            className="[animation-delay:-40s] [animation-duration:40s]"
            isActive={isMobile && isInView}
          />
          <Logo
            label="I-15"
            src="/interstate/I-15.svg"
            className="[animation-delay:-20s] [animation-duration:40s]"
            isActive={isMobile && isInView}
          />
        </Row>
        <Row>
          <Logo
            label="I-25"
            src="/interstate/I-25.svg"
            className="[animation-delay:-10s] [animation-duration:40s]"
            isActive={isMobile && isInView}
          />
          <Logo
            label="I-42"
            src="/interstate/I-42.svg"
            className="[animation-delay:-32s] [animation-duration:40s]"
            isActive={isMobile && isInView}
          />
        </Row>
        <Row>
          <Logo
            label="I-55"
            src="/interstate/I-55.svg"
            className="[animation-delay:-45s] [animation-duration:45s]"
            isActive={isMobile && isInView}
          />
          <Logo
            label="I-4"
            src="/interstate/I-4.svg"
            className="[animation-delay:-23s] [animation-duration:45s]"
            isActive={isMobile && isInView}
          />
        </Row>
        <Row>
          <Logo
            label="I-57"
            src="/interstate/I-57.svg"
            className="[animation-delay:-55s] [animation-duration:60s]"
            isActive={isMobile && isInView}
          />
          <Logo
            label="I-68"
            src="/interstate/I-68.svg"
            className="[animation-delay:-20s] [animation-duration:60s]"
            isActive={isMobile && isInView}
          />
        </Row>
        <Row>
          <Logo
            label="I-76"
            src="/interstate/I-76.svg"
            className="[animation-delay:-9s] [animation-duration:40s]"
            isActive={isMobile && isInView}
          />
          <Logo
            label="I-81"
            src="/interstate/I-81.svg"
            className="[animation-delay:-28s] [animation-duration:40s]"
            isActive={isMobile && isInView}
          />
        </Row>
      </div>
    </div>
  )
}
