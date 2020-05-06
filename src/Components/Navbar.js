import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() { 
    const activeStyle = {
    background: "pink", color: "white", fontWeight: "800"
    }
  return (
    <div> 
      <NavLink activeStyle={activeStyle} exact to="/">Home</NavLink>{" "}
      <NavLink activeStyle={activeStyle} to="/Explore" exact>Explore Cocktails</NavLink>
    </div>
  )
}