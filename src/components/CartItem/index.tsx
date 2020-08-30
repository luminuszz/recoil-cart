import React from 'react'

import cartIgem from '../../assets/cart.png'
import { Container, CartImage, CartItemContent } from './styles'

const CartItem: React.FC = () => {
  return (
    <Container>
      <CartImage src={cartIgem} />
      <CartItemContent>
        <strong>Sua compra</strong>
        <span>Compra feita com sucesso</span>
      </CartItemContent>
    </Container>
  )
}
export default CartItem
