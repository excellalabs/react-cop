import React, { Component } from 'react';

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
    console.log(this.state.username)
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


export default Login;