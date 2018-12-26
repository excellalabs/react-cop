import React from 'react'
import styles from './TodoFilter.module.css'

const TodoFilter = (props) => {
  const { isActive, onClick, children } = props

  const s = isActive ? `${styles.button} ${styles.active}` : styles.button
  
  return (
    <button onClick={onClick} className={s}>
      {children}
    </button>
  )
}

export default TodoFilter