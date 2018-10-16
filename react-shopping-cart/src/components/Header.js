import React from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../contexts/auth';


const navLinks = (props) => {
  const { authenticated, username, logOut } = props.auth

  if (authenticated) {
    return (
      <div className="header-nav-item">
        <span>{username}</span>
        <button onClick={logOut}>Log Out</button>
      </div>
    )
  } else {
    return <Link to="/login" className="header-nav-item">Sign In</Link>
  }
}

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        {navLinks(props)}      
      </nav>
    </header>
  )
}

export default withAuth(Header);