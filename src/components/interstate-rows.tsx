import { clsx } from 'clsx'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-black/15 from-[2px] to-[2px] bg-[length:12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-black/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({
  label,
  src,
  className,
}: {
  label: string
  src: string
  className: string
}) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 grid grid-cols-[1rem,1fr] items-center gap-2 whitespace-nowrap px-3 py-1',
        'rounded-full bg-gradient-to-t from-gray-50 from-50% to-gray-100 ring-1 ring-inset ring-white/10',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]',
      )}
    >
      <img alt="" src={src} className="size-4" />
      <span className="text-sm/6 font-medium text-gray-900">{label}</span>
    </div>
  )
}

export function InterstateRows() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 pt-8 [container-type:inline-size]">
        <Row>
          <Logo
            label="I-10"
            src="/interstate/I-10.svg"
            className="[animation-delay:-26s] [animation-duration:30s]"
          />
          <Logo
            label="I-95"
            src="/interstate/I-95.svg"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          <Logo
            label="I-90"
            src="/interstate/I-90.svg"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          <Logo
            label="I-15"
            src="/interstate/I-15.svg"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="I-25"
            src="/interstate/I-25.svg"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          <Logo
            label="I-42"
            src="/interstate/I-42.svg"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="I-55"
            src="/interstate/I-55.svg"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />
          <Logo
            label="I-4"
            src="/interstate/I-4.svg"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
        <Row>
          <Logo
            label="I-57"
            src="/interstate/I-57.svg"
            className="[animation-delay:-55s] [animation-duration:60s]"
          />
          <Logo
            label="I-68"
            src="/interstate/I-68.svg"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
        </Row>
        <Row>
          <Logo
            label="I-76"
            src="/interstate/I-76.svg"
            className="[animation-delay:-9s] [animation-duration:40s]"
          />
          <Logo
            label="I-81"
            src="/interstate/I-81.svg"
            className="[animation-delay:-28s] [animation-duration:40s]"
          />
        </Row>
      </div>
    </div>
  )
}
