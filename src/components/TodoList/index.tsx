import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import {
  todoListState,
  Product,
  CartItemSelector
} from '../../recoil/atoms/Todolist'
import api from '../../services/api'

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Product[]>()
  const [cart, setCart] = useRecoilState(CartItemSelector)

  useEffect(() => {
    api.get('/products').then(response => setTodoList(response.data))
  }, [setTodoList])

  const addProduct = useCallback(
    (product: Product) => {
      setCart([...cart, product])
    },
    [setCart, cart]
  )

  return (
    <>
      <div>
        <br />
        <React.Suspense fallback={<div>Carregando</div>}>
          {todoList?.map(product => (
            <article key={product.id}>
              <strong>{`Nome: ${product.productName}`}</strong>
              <p> {`Preço: ${product.price}`}</p>
              <p>{`Descrição: ${product.description}`}</p>
              <button onClick={() => addProduct(product)}>
                Adcionar ao carrinho
              </button>
            </article>
          ))}
        </React.Suspense>
      </div>
    </>
  )
}

export default TodoList
