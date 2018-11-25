import React from 'react'

const TodoFilter = (props) => {
  const { isActive, onClick, children } = props
  
  return (
    <button onClick={onClick}>
      { 
        isActive 
        ? <b>{children}</b>
        : children
      }
    </button>
  )
}

export default TodoFilter