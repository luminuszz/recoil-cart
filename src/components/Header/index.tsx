import React from 'react'

import logout from '../../assets/logout.svg'
import menu from '../../assets/menu.svg'
import { Container, HeaderContainer } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <img src={menu} alt="menu" />
        <strong>Davi Ribeiro</strong>
        <img src={logout} alt="menu" />
      </HeaderContainer>
    </Container>
  )
}

export default Header
