import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { LogoDark } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Ready to take back your Car Thing?
        </p>
      </hgroup>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="/installation">
          Get Started
          <ChevronRightIcon className="mt-0.5 size-4" />
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-[hover]:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Product</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/installation">Installation</SitemapLink>
          <SitemapLink href="/support">Support Nocturne</SitemapLink>
          <SitemapLink href="https://github.com/usenocturne">
            Source Code
          </SitemapLink>
          <SitemapLink href="/about">About</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Nocturne.
    </div>
  )
}

function Disclaimer() {
  return (
    <div className="text-sm/6 text-gray-950">
      "Spotify" and "Car Thing" are trademarks of Spotify AB. This software is
      not affiliated with or endorsed by Spotify AB.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/95" />{' '}
        <Container className="relative px-8 sm:px-0">
          {' '}
          <CallToAction />
          <div className="pb-16">
            <div>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <div className="relative pt-6 lg:pb-6">
                    {' '}
                    <LogoDark className="h-9" />
                  </div>
                </div>
                <div className="relative col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  {' '}
                  <Sitemap />
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t border-black/5 pt-6">
              <div className="relative">
                {' '}
                <div className="py-3">
                  <Copyright />
                </div>
                <div className="py-3">
                  <Disclaimer />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
