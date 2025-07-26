import { clsx } from 'clsx'

interface GradientProps extends React.ComponentPropsWithoutRef<'div'> {
  colors?: string[]
}

export function Gradient({
  className,
  colors,
  ...props
}: GradientProps) {
  if (colors && colors.length >= 3) {
    return (
      <div
        {...props}
        className={clsx(className, 'transition-all duration-2000 ease-in-out')}
        style={{
          background: `linear-gradient(115deg, ${colors[0]} 28%, ${colors[1]} 70%, ${colors[2]} 100%)`,
          ...props.style
        }}
      />
    )
  }

  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fd9f7b] from-[28%] via-[#fe7e98] via-[70%] to-[#b461f9] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fd9f7b] from-[28%] via-[#fe7e98] via-[70%] to-[#b461f9]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
