import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

import TodoList from './components/TodoList'
import ViewTodolist from './components/ViewTodolist'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <TodoList />
      <ViewTodolist />
    </RecoilRoot>
  )
}

export default App
