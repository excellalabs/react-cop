import React, { Component } from 'react';

import { withAuth } from '../../contexts/auth'

import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null
    }
  }
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.auth.logIn(this.state.username)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" onChange={this.handleInput} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};


export default withAuth(Login);