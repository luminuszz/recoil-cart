import React from 'react'

import CartContent from '../CartContent'
import Header from '../Header'
import Menu from '../Menu'
import Profile from '../Profile'
import Section from '../Section'
import Sidebar from '../Sidebar'
import { Container } from './styles'

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Menu />
      <Section />
      <CartContent />
      <Sidebar />
    </Container>
  )
}

export default Cart
