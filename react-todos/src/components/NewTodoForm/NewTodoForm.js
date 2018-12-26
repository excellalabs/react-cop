import React, { Component } from 'react'

import styles from './NewTodoForm.module.css'

const initialState= {
  title: ""
}

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.title) {
      const newTodo = {...this.state, isComplete: false}
      this.props.addTodo(newTodo).then(() => {
        this.setState(initialState)
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input 
          type ="text" 
          name="title"
          placeholder="Add New"
          value={this.state.title}
          onChange={this.handleInput}
          className={styles.input}
        />
      </form>
    )
  }
}

export default NewTodoForm