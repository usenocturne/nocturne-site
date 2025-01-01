'use client'
import { Navbar } from '@/components/about/about-navbar'
import AnimatedImageGallery from '@/components/about/animated-image-gallery'
import AnimatedTeamMember from '@/components/about/animated-team-members'
import AnimatedTestimonial from '@/components/about/animated-testimonials'
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

const testimonials = [
  {
    body: 'Thank you for helping revive this device!',
    author: {
      name: 'Jade Robbins',
      handle: 'jaderobbins',
      imageUrl: 'testimonials/1.jpg',
    },
    href: 'https://x.com/jaderobbins/status/1861117484927197615',
  },
  {
    body: 'This is awesome thank you!',
    author: {
      name: 'Alex Fife',
      handle: 'alextfife',
      imageUrl: 'testimonials/2.jpg',
    },
    href: 'https://x.com/alextfife/status/1861080147954180142',
  },
  {
    body: 'These people are doing amazing work.',
    author: {
      name: 'Jeff Xu',
      handle: 'JSandals1',
      imageUrl: 'testimonials/3.jpg',
    },
    href: 'https://x.com/JSandals1/status/1861238960548163770',
  },
  {
    body: 'I love when people take matters into their own hands.',
    author: {
      name: 'Ray Wong',
      handle: 'raywongy',
      imageUrl: 'testimonials/4.jpg',
    },
    href: 'https://x.com/raywongy/status/1861248921877569892',
  },
  {
    body: 'Sick!!!!!!!!!',
    author: {
      name: 'alistair',
      handle: 'alistaiir',
      imageUrl: 'testimonials/5.jpg',
    },
    href: 'https://x.com/alistaiir/status/1856887872370217401',
  },
  {
    body: 'So excited for this!',
    author: {
      name: 'Jim England',
      handle: 'JimEngland',
      imageUrl: 'testimonials/6.jpg',
    },
    href: 'https://x.com/JimEngland/status/1852470793684635941',
  },
  {
    body: 'lfg, this is the news i’ve been waiting for!!!',
    author: {
      name: 'janniks',
      handle: 'janniksco',
      imageUrl: 'testimonials/7.jpg',
    },
    href: 'https://x.com/janniksco/status/1852361766283444334',
  },
  {
    body: 'Incredible stuff!',
    author: {
      name: 'brian',
      handle: 'officialbois',
      imageUrl: 'testimonials/8.jpg',
    },
    href: 'https://x.com/officialbois/status/1852280293320999021',
  },
  {
    body: 'Oh this is cool.',
    author: {
      name: 'Parker Rex',
      handle: 'ParkerRex',
      imageUrl: 'testimonials/9.jpg',
    },
    href: 'https://x.com/ParkerRex/status/1861615461676241376',
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
            <div className="mx-auto max-w-7xl pb-20 pt-12 sm:pb-32 sm:pt-60 lg:pt-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full px-8 sm:px-0 lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Giving Hardware a Second Life.
                  </h1>
                  <p className="mt-8 text-pretty text-lg text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    When Spotify ended Car Thing support, thousands of devices
                    became paperweights overnight. We're changing that by
                    creating open source software that transforms these
                    forgotten devices into powerful car companions, proving that
                    great hardware deserves a second chance.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <AnimatedImageGallery />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl gap-20 px-8 sm:grid sm:grid-cols-2 sm:px-0">
          <div className="relative hidden sm:block">
            <img
              alt=""
              src="/about/6.webp"
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="mx-auto max-w-2xl sm:mt-10 sm:px-0 lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              The Mission.
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-lg/8 text-gray-600">
                  At Nocturne, we believe abandoned hardware doesn't have to
                  stay abandoned. When Spotify discontinued Car Thing support,
                  we saw an opportunity to transform disappointment into
                  innovation. Our mission is to breathe new life into these
                  devices through open source software, enabling users to keep
                  their Car Things not just functional, but better than ever.
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  We believe that innovation thrives in unexpected places.
                  Through open source principles, we empower users to
                  experiment, customize, and discover new and exciting uses for
                  their Car Things. Through our mission, we're not just creating
                  software - we're creating a community. A community of
                  developers, car enthusiasts, and tinkerers united by a simple
                  belief: great hardware deserves great software.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 sm:py-40">
          <div className="mx-auto grid max-w-7xl gap-12 px-8 sm:px-0 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                The Team.
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We're builders, creators, and explorers, working together to
                unlock the full potential of the Car Thing.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person, index) => (
                <AnimatedTeamMember
                  key={person.name}
                  person={person}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mb-32 hidden max-w-7xl gap-20 px-8 sm:grid sm:grid-cols-3 sm:px-0">
          <div className="mx-auto max-w-2xl sm:col-span-2 sm:px-0 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedTestimonial
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-2xl sm:col-span-1 sm:px-0 lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              The Results.
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-lg/8 text-gray-600">
                  The positive feedback from our community means a lot to us.
                  Here are just a few of the kind words people have shared about
                  our work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-20 grid max-w-7xl gap-12 px-8 sm:mb-32 sm:hidden sm:grid-cols-3 sm:px-0">
          <div className="mx-auto max-w-2xl sm:col-span-1 sm:px-0 lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              The Results.
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-lg/8 text-gray-600">
                  The positive feedback from our community means a lot to us.
                  Here are just a few of the kind words people have shared about
                  our work.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl sm:col-span-2 sm:px-0 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedTestimonial
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
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
