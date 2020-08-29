import React from 'react'
import { useRecoilValue } from 'recoil'

import TodoListState from '../../recoil/atoms/Todolist'

const ViewTodolist: React.FC = () => {
  const data = useRecoilValue(TodoListState)

  console.log(data)

  return <div />
}

export default ViewTodolist
