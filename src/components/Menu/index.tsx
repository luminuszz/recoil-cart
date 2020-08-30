import React from 'react'

import { Container, MenuAction } from './styles'

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuAction>
        <button>Account</button>
      </MenuAction>
      <MenuAction isSelectd>
        <button>Orders History</button>
      </MenuAction>
      <MenuAction>
        <button>Address</button>
      </MenuAction>
    </Container>
  )
}

export default Menu
