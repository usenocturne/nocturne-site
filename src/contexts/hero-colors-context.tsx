'use client'

import { createContext, useContext, ReactNode } from 'react'

interface HeroColorsContextType {
  colors: string[]
}

const HeroColorsContext = createContext<HeroColorsContextType | undefined>(undefined)

export function HeroColorsProvider({
  children,
  colors
}: {
  children: ReactNode
  colors: string[]
}) {
  return (
    <HeroColorsContext.Provider value={{ colors }}>
      {children}
    </HeroColorsContext.Provider>
  )
}

export function useHeroColors() {
  const context = useContext(HeroColorsContext)
  if (context === undefined) {
    return { colors: ['#7456c1', '#fa6767', '#ff4d4a', '#7456c1'] }
  }
  return context
}