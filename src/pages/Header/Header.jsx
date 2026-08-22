import { useState } from "react"
import './Header.css'
import { Link } from "react-router-dom"
function Header() {
    return (
      <header className="Header">
        <div className="name-div">
            <a className="name" href="/"><h2 className="name">creative-space</h2></a>
        </div>
        <nav className="nav-bar">
            <a href="https://github.com/andersoncrespani/creative-space">github</a>
            <Link to= "/Login">Login</Link>
        </nav>
      </header>
    )
}

export default Header