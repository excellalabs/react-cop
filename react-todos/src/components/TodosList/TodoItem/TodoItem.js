import React from 'react'

const TodoItem = (props) => {
  const { item, updateTodo, deleteTodo } = props

  const toggleCompleted = (e) => {
    updateTodo({
      ...item,
      isComplete: e.target.checked
    })
  }

  const updateTitle = (e) => {
    updateTodo({
      ...item,
      title: e.target.value
    })
  }

  return (
    <div>
      <input type="checkbox" checked={item.isComplete} onChange={toggleCompleted} />
      <input type="text" value={item.title} onChange={updateTitle} />
      <button onClick={() => deleteTodo(item.id)}>X</button>
    </div>
  )
}

export default TodoItem