import React from 'react'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <div>
      <NavItem exact to="/">Home</NavItem>
      <NavItem to="/Explore" exact>Cocktails</NavItem>
    </div>
  )
}

