import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeContext } from './contexts/ThemeContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'

export function App() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
