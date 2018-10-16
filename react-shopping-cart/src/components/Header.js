import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/login">Sign In</Link>
      </nav>
    </header>
  )
}

export default Header;