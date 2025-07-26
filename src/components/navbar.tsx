'use client'

import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'

const links = [
  { href: 'https://github.com/usenocturne/nocturne/blob/main/README.md', label: 'Installation' },
  { href: '/support', label: 'Support Nocturne' },
  { href: 'https://github.com/usenocturne', label: 'Source Code' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="duration-350 flex items-center rounded-2xl px-4 py-3 text-base font-medium text-white bg-blend-multiply transition ease-in-out data-[hover]:text-white/80"
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="duration-350 flex size-12 items-center justify-center self-center rounded-lg transition ease-in-out data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6 text-white" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <Disclosure.Panel static>
      {({ open }) => (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="flex flex-col gap-6 py-4">
                {links.map(({ href, label }, linkIndex) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: linkIndex * 0.1,
                      ease: 'easeInOut',
                    }}
                    key={href}
                  >
                    <Link
                      href={href}
                      className="text-base font-medium text-white"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Disclosure.Panel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <div className="relative flex justify-between">
        <div className="relative flex gap-6">
          <div className="py-3">
            <Link href="/" title="Home">
              <Logo className="h-9" />
            </Link>
          </div>
          {banner && (
            <div className="relative hidden items-center py-3 lg:flex">
              {banner}
            </div>
          )}
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  )
}
