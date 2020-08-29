import React, { useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { v4 as uuid } from 'uuid'

import TodoListState, {
  FilterTodoSelector,
  FilterTodoListState
} from '../../recoil/atoms/Todolist'

interface TodoItem {
  id: string
  title: string
  author: string
  description: string
}

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(FilterTodoSelector)
  const [, setFilter] = useRecoilState(FilterTodoListState)

  const filterAuthor = useCallback(
    (author: string) => {
      setFilter(author)
    },
    [setFilter]
  )

  return (
    <div>
      {todoList.map(todo => (
        <article key={todo.id}>
          <strong>{todo.title}</strong>
          <p>{todo.author}</p>
          <p>{todo.description}</p>
        </article>
      ))}
      <button>Adcionar novo Todo</button>
      <button onClick={() => filterAuthor('carlos')}>Filtrar por carlos</button>
      <button onClick={() => filterAuthor('davi')}>Filtrar por Davi</button>
      <button onClick={() => filterAuthor('all')}>Filtrar por todos</button>
    </div>
  )
}

export default TodoList
