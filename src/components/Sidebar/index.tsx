import React from 'react'

import account from '../../assets/account.svg'
import book from '../../assets/book.svg'
import shopping from '../../assets/shopping.svg'
import { Container, SidebarContent } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SidebarContent>
        <button>
          <img src={account} alt="" />
        </button>
        <button>
          <img src={book} alt="" />
        </button>
        <button>
          <img src={shopping} alt="" />
        </button>
      </SidebarContent>
    </Container>
  )
}

export default Sidebar
