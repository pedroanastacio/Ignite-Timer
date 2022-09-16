import { Timer, Scroll, PaintBrushHousehold } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts/ThemeContext'
import logoIgnite from '../../assets/logo-ignite.svg'

import { HeaderContainer } from './styles'

export function Header() {
  const { switchTheme } = useContext(ThemeContext)

  function handleSwitchTheme() {
    switchTheme()
  }

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <div>
        <button onClick={handleSwitchTheme}>
          <PaintBrushHousehold size={24} />
        </button>
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>

          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
