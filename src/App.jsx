import { Form, Router } from 'react-router-dom'
import Header from '../src/pages/Header/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Criarconta from './pages/CriarConta/Criarconta'
import { useEffect, useState } from 'react'

function App() {
    const[tema, setTema] = useState(() => {const salvo = localStorage.getItem('tema')
        if(salvo) return salvo

        const preferenciaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
        return 'light'
    })
    function alternarTema() {
        setTema(t => (t === 'light' ? 'dark' : 'light'))
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', tema)
        localStorage.setItem('tema', tema)
    }, [tema])
    return (
        <>
        <Header tema={tema} aoAlternarTema={alternarTema} />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Criarconta' element={<Criarconta />}/>
        </Routes>
        </>
    )
}

export default App