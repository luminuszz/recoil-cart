import React from 'react'
import { useRecoilValue } from 'recoil'

import { cartState } from '../../recoil/atoms/Todolist'

const ViewTodolist: React.FC = () => {
  const data = useRecoilValue(cartState)
  console.log(data)

  return (
    <div>
      <h3>CARRINHO,</h3>

      {data.map(product => (
        <article key={product.id}>
          <strong>{product.productName}</strong>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <p>{product.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ViewTodolist
