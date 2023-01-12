import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
          <Link to='/home'>Home</Link>
          <Link to='/signin'>Sign in</Link>
          <Link to='/profile'>Profile</Link>
    </nav>
  )
}
