import React, { Component } from 'react';

const AuthContext = React.createContext()

export class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      username: null
    }
  }

  logIn = (username) => {
    this.setState({
      authenticated: true,
      username: username
    })
  }

  logOut = () => {
    this.setState({
      authenticated: false,
      username: null
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const withAuth = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {(auth) => <Component auth={auth} {...props} />}
    </AuthContext.Consumer>
  )
}