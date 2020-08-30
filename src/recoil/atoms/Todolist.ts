import produce from 'immer'
import { atom, DefaultValue, selector } from 'recoil'

import api from '../../services/api'

export interface Product {
  id: string
  productName: string
  price: number
  description: string
  quantity: number
}

export interface Stock {
  id: string
  quantity: number
}

export const todoListState = atom<Product[]>({
  key: 'TodoListState',
  default: []
})

export const cartState = atom<Product[]>({
  key: 'cartState',
  default: []
})

export const stockState = atom<Stock[]>({
  key: 'stockState',
  default: []
})

export const CartItemSelector = selector<Product[]>({
  key: 'CartItemSelector',
  get: ({ get }) => {
    const products = get(todoListState)

    return products
  },
  set: ({ set, get }, newvalue) => {
    const cart = get(cartState)

    if (newvalue instanceof DefaultValue) {
      return newvalue
    }

    const nexState = produce(cart, drafState => {
      const findIndex = drafState.findIndex(item => item.id === newvalue[0].id)

      if (findIndex >= 0) {
        drafState[findIndex].quantity++
      } else {
        drafState.push({ ...newvalue[0], quantity: 1 })
      }

      return drafState
    })

    set(cartState, nexState)
  }
})

export default todoListState
