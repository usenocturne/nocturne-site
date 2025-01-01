import { useEffect, useRef } from 'react'

interface TeamMember {
  name: string
  role: string
  imageUrl: string
  href: string
}

interface AnimatedTeamMemberProps {
  person: TeamMember
}

const AnimatedTeamMembers = ({ person }: AnimatedTeamMemberProps) => {
  const memberRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (window.innerWidth >= 640) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (memberRef.current) {
              memberRef.current.classList.remove('opacity-0', 'translate-y-8')
              memberRef.current.classList.add('opacity-100', 'translate-y-0')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    if (memberRef.current) {
      observer.observe(memberRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <li
      ref={memberRef}
      className="translate-y-8 transform opacity-0 transition-all duration-700 ease-out sm:transform-none sm:opacity-100"
    >
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
  )
}

export default AnimatedTeamMembers
