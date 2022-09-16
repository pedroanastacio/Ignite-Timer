import { createContext, PropsWithChildren, useEffect, useState } from 'react'

import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

type ThemeState = 'default' | 'light'

interface ThemeContextType {
  currentTheme: typeof defaultTheme | typeof lightTheme
  switchTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeState>(
    (localStorage.getItem('@ignite-timer:theme-state-1.0.0') as ThemeState) ||
      'default',
  )

  const currentTheme = theme === 'default' ? defaultTheme : lightTheme

  function switchTheme() {
    if (theme === 'default') {
      setTheme('light')
    } else {
      setTheme('default')
    }
  }

  useEffect(() => {
    localStorage.setItem('@ignite-timer:theme-state-1.0.0', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
