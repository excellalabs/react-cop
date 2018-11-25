import React, { Component } from 'react'

import TodoItem from './TodoItem/TodoItem'
import TodoFilter from './TodoFilter/TodoFilter'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  setFilter = (filter) => {
    this.setState({
      filter
    })
  }

  render() {
    const { items, updateTodo, deleteTodo } = this.props
    const { filter } = this.state
    
    const todoItems = () => {
      if (this.state.filter === 'active') {
        return items.filter(item => !item.isComplete)
      } else if (this.state.filter === 'complete') {
        return items.filter(item => item.isComplete)
      } else {
        return items
      }
    }

    return (
      <div>
        {
          todoItems().map((todo, index) => {
            return <TodoItem key={index} item={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
        <div>
          <TodoFilter isActive={filter === 'all'} onClick={() => this.setFilter('all')}>All</TodoFilter>
          <TodoFilter isActive={filter === 'active'} onClick={() => this.setFilter('active')}>Active</TodoFilter>
          <TodoFilter isActive={filter === 'complete'} onClick={() => this.setFilter('complete')}>Complete</TodoFilter>
        </div>
      </div>
    )
  }
}

export default TodoList