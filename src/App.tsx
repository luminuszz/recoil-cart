import React from 'react'
import { RecoilRoot } from 'recoil'

import Cart from './components/Cart'
import { Global } from './styles/global'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Cart />
      <Global />
    </RecoilRoot>
  )
}

export default App
