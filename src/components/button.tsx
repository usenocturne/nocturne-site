import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-12 py-[calc(theme(spacing.2)-1px)]',
    'rounded-full border border-transparent bg-gray-950/40 shadow-md',
    'whitespace-nowrap text-base font-medium text-white',
    'transition-all duration-500 ease-in-out data-[disabled]:bg-gray-950 data-[hover]:bg-gray-950/30 data-[disabled]:opacity-40',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)]',
    'rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'whitespace-nowrap text-base font-medium text-gray-950',
    'data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40',
  ),
  outline: clsx(
    'relative inline-flex items-center justify-center px-12 py-[calc(theme(spacing.2)-1px)]',
    'rounded-full border border-transparent bg-black shadow-md hover:bg-white/95 hover:text-gray-950 dark:hover:text-white',
    'whitespace-nowrap text-base font-medium text-white dark:text-black',
    'duration-350 transition ease-in-out data-[disabled]:bg-gray-950 data-[disabled]:opacity-40',
    'isolate z-10',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = clsx(className, variants[variant])

  const content =
    typeof props.href === 'undefined' ? (
      <Headless.Button {...props} className={buttonClassName} />
    ) : (
      <Link {...props} className={buttonClassName} />
    )

  if (variant === 'outline') {
    return (
      <div className="group relative inline-flex">
        <div className="absolute -inset-px rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 blur-[10px] transition-[opacity,inset] duration-1000 group-hover:-inset-1 group-hover:opacity-100"></div>
        <div className="absolute inset-0 rounded-full bg-gray-950/40 dark:bg-gray-950" />
        {content}
      </div>
    )
  }

  return content
}
