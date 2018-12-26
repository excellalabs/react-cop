import React from 'react'

import styles from './TodoItem.module.css'

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

  const itemStyles = item.isComplete ? `${styles.container} ${styles.completed}` : styles.container

  return (
    <div className={itemStyles}>
      <input type="checkbox" checked={item.isComplete} onChange={toggleCompleted} className={styles.checkbox} />
      <input type="text" value={item.title} onChange={updateTitle} className={styles.input} />
      <button onClick={() => deleteTodo(item.id)} className={styles.removeItemButton}>X</button>
    </div>
  )
}

export default TodoItem