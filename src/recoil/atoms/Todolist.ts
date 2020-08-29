import { atom, selector } from 'recoil'

interface TodoList {
  id: string
  title: string
  author: string
  description: string
}

const todoListState = atom<TodoList[]>({
  key: 'TodoListState',
  default: [
    {
      id: '1',
      title: 'Algo assim 6',
      author: 'davi Ribeiro 5 ',
      description: 'Fazer algo assim para isso 5'
    },
    {
      id: '2',
      title: 'Algo assim 3',
      author: 'davi Ribeiro 5',
      description: 'Fazer algo assim para isso 4'
    },
    {
      id: '3',
      title: 'Algo assim 2',
      author: 'davi Ribeiro',
      description: 'Fazer algo assim para isso'
    },
    {
      id: '4',
      title: 'Algo assim 2',
      author: 'carlos',
      description: 'Fazer algo assim para isso'
    }
  ]
})

export const FilterTodoListState = atom({
  key: 'FilterTodoListState',
  default: 'all'
})

export const FilterTodoSelector = selector({
  key: 'FilterTodoSelector',

  get: ({ get }) => {
    const filterState = get(FilterTodoListState)
    const todos = get(todoListState)

    switch (filterState) {
      case 'davi':
        return todos.filter(todo => todo.author === 'davi Ribeiro')

      case 'carlos':
        return todos.filter(todo => todo.author === 'carlos')

      default:
        return todos
    }
  }
})

export default todoListState
