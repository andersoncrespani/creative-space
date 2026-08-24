import { useState } from "react"
import './Header.css'
import { Link } from "react-router-dom"

function Header({tema, aoAlternarTema}) {
    return (
      <header className="Header">
        <div className="name-div">
            <a className="name" href="/"><h2 className="name">game-news</h2></a>
        </div>
        <div className="btn-theme">
        <button onClick={aoAlternarTema} className="theme-toggle-btn">
          {tema === 'light' ? '🌙 Escuro' : '☀️ Claro'}
        </button>
        <div className="nav-container">
          <nav className="nav-bar">
            <Link to= "/Login">Login</Link>
        </nav>
        </div>
        </div>
      </header>
    )
}

export default Header