import React, { Component } from 'react';
import axios from 'axios'

import NewTodoForm from './components/NewTodoForm/NewTodoForm'
import TodoList from './components/TodosList/TodosList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.fetchTodos()
  }

  fetchTodos = () => {
    axios.get('/todos')
      .then(res => {
        this.setState({
          todos: res.data
        })
      })
  }

  addTodo = async (newTodo) => {
    return axios.post('/todos', newTodo)
      .then(() => {
        this.fetchTodos()
      })
  }

  updateTodo = (todo) => {
    axios.put(`/todos/${todo.id}`, todo)
      .then(() => {        
        this.setState({
          todos: this.state.todos.map(t => t.id === todo.id ? todo : t)
        })
      })
  }

  deleteTodo = (id) => {
    axios.delete(`/todos/${id}`)
      .then(() => {
        this.fetchTodos()
      })
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <TodoList 
          items={this.state.todos} 
          updateTodo={this.updateTodo} 
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
