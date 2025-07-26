'use client'

import { useEffect } from 'react'

export function ThemeProvider() {
  useEffect(() => {
    const updateTheme = () => {
      const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const lightQuery = window.matchMedia('(prefers-color-scheme: light)')
      let shouldUseDark = false

      if (lightQuery.matches) {
        shouldUseDark = false
      } else if (darkQuery.matches && !lightQuery.matches) {
        shouldUseDark = true
      } else {
        shouldUseDark = false
      }

      if (shouldUseDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    updateTheme()

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const lightQuery = window.matchMedia('(prefers-color-scheme: light)')

    darkQuery.addEventListener('change', updateTheme)
    lightQuery.addEventListener('change', updateTheme)

    return () => {
      darkQuery.removeEventListener('change', updateTheme)
      lightQuery.removeEventListener('change', updateTheme)
    }
  }, [])

  return null
}