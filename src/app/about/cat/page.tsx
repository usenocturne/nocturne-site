import { Link } from '@/components/link'

export default function Page() {
  return (
    <div className="h-screen bg-white dark:bg-zinc-950">
      <div className="flex justify-center px-6 pb-8 pt-8">
        <img
          className="rounded-3xl sm:h-[800px]"
          src="/images/sim.jpg"
          alt="cat"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Simby
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Nocturne's strongest soldier 😼
        </p>
        <Link href="/about">
          <div className="pt-2 text-sm text-gray-700 transition duration-300 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400">
            ← Go Back
          </div>
        </Link>
      </div>
    </div>
  )
}
