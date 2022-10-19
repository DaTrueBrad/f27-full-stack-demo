import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Brady's Store</h2>
      <nav>
        <Link to="/">
          <button className='nav-btn'>Home</button>
        </Link>
        <Link to="/cart">
          <button className='nav-btn'>Cart</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header