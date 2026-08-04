import { useState } from "react"
import './Header.css'
import { Link } from "react-router-dom"
function Header() {
    return (
      <header className="Header">
        <div className="name-div">
            <h2 className="name">creative-space</h2>
        </div>
        <nav className="nav-bar">
            <a href="#">espaço</a>
            <a href="#">projetos</a>
            <Link to= "/Login">Login</Link>
        </nav>
      </header>
    )
}

export default Header