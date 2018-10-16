import React, { Component } from 'react';

import './Login.css'


class Login extends Component {
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
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