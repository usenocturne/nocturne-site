'use client'
import { Navbar } from '@/components/about-navbar'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

const people = [
  {
    name: 'Brandon Saldan',
    role: 'Software Engineer',
    imageUrl: 'https://usenocturne.com/map/1.jpg',
    href: 'https://github.com/brandonsaldan',
  },
  {
    name: 'bbaovanc',
    role: 'Software Engineer',
    imageUrl: 'https://usenocturne.com/map/3.jpg',
    href: 'https://github.com/bbaovanc',
  },
  {
    name: 'Dominic Frye',
    role: 'Software Engineer',
    imageUrl: 'https://usenocturne.com/map/2.jpg',
    href: 'https://github.com/itsnebulalol',
  },
  {
    name: 'shadow',
    role: 'Software Engineer',
    imageUrl: 'https://usenocturne.com/map/4.jpg',
    href: 'https://github.com/68p',
  },
]

function Hero() {
  return (
    <div className="relative">
      <Container className="relative px-8 sm:px-0">
        <Navbar
          banner={
            <Link
              href="https://github.com/usenocturne/nocturne-image"
              className="duration-350 flex items-center gap-1 rounded-full bg-gray-950/40 px-3 py-0.5 text-sm/6 font-medium text-white transition ease-in-out data-[hover]:bg-gray-950/30"
            >
              Nocturne Public Beta Now Available
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
      </Container>
    </div>
  )
}

function About() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl pb-32 pt-12 sm:pt-60 lg:pt-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full px-8 sm:px-0 lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Giving Hardware a Second Life.
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    When Spotify ended Car Thing support, thousands of devices
                    became paperweights overnight. We're changing that by
                    creating open source software that transforms these
                    forgotten devices into powerful car companions, proving that
                    great hardware deserves a second chance.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="/about/1.webp"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="/about/2.webp"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="/about/3.webp"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="/about/4.webp"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="/about/5.webp"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 max-w-7xl sm:mt-0 xl:-mt-8">
          <div className="mx-auto max-w-2xl px-8 sm:px-0 lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  At Nocturne, we believe abandoned hardware doesn't have to
                  stay abandoned. When Spotify discontinued Car Thing support,
                  we saw an opportunity to transform disappointment into
                  innovation. Our mission is to breathe new life into these
                  devices through open source software, empowering users to keep
                  their Car Things not just functional, but better than ever.
                </p>
              </div>
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  We're building more than just replacement software – we're
                  creating a community where hardware enthusiasts, developers,
                  and everyday users come together to extend the life of
                  technology. Through transparent development, active community
                  engagement, and continuous innovation, we're proving that
                  end-of-support doesn't mean end-of-life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-8 sm:px-0 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                The Team
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We're a passionate community of developers, car enthusiasts, and
                tinkerers united by a simple belief: great hardware deserves
                great software.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <div className="group flex items-center gap-x-6">
                      <a target="_blank" href={person.href}>
                        <img
                          alt=""
                          src={person.imageUrl}
                          className="size-16 rounded-full"
                        />
                      </a>
                      <div>
                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="bg-gradient-to-r from-[#ff8a5b] from-[28%] via-[#fe7e98] via-[70%] to-[#f984ff] bg-clip-text text-sm/6 font-normal text-transparent">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="mb-6 bg-gradient-to-b from-white from-50% to-gray-100 sm:mb-0">
          <About />
        </div>
      </main>
      <Footer />
    </div>
  )
}
