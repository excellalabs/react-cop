import React from 'react'
import TodoItem from './TodoItem/TodoItem'

const TodoList = (props) => {
  const { items, updateTodo, deleteTodo } = props

  return (
    <div>
      {
        items.map((todo, index) => {
          return <TodoItem key={index} item={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        })
      }
    </div>
  )
}

export default TodoList