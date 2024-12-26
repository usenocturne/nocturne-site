import { Heading } from '@/components/text'
import { LinkIcon } from '@heroicons/react/24/outline'
import { isValidElement } from 'react'

interface SectionLinkProps {
  children: React.ReactNode
  id: string
}

export function SectionLink({ children, id }: SectionLinkProps) {
  const copyLink = () => {
    const url = new URL(window.location.href)
    url.hash = id
    navigator.clipboard.writeText(url.toString())
  }

  const isHeading = isValidElement(children) && children.type === Heading

  return (
    <div className="relative" id={id}>
      <button
        onClick={copyLink}
        className={`absolute -left-8 text-gray-400 transition duration-300 ease-in-out hover:text-blue-600 ${
          isHeading ? 'top-6' : 'top-4'
        }`}
        aria-label="Copy link to section"
      >
        <LinkIcon className="h-5 w-5" />
      </button>
      {children}
    </div>
  )
}
