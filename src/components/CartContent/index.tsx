import React from 'react'

import CartItem from '../CartItem'
import { Container } from './styles'

const CartContent: React.FC = () => {
  return (
    <Container>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Container>
  )
}

export default CartContent
