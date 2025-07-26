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
    return { colors: ['#fd9f7b', '#fe7e98', '#b461f9', '#fd9f7b'] }
  }
  return context
}