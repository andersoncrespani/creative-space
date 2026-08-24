import { Form, Router } from 'react-router-dom'
import Header from './components/Header/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Criarconta from './pages/CriarConta/Criarconta'
import { useEffect, useState } from 'react'
import Footer from './components/footer/Footer.jsx'
import Sobre from '../src/pages/sobre/Sobre.jsx'
import Seguranca from './pages/Seguranca/Seguranca.jsx'

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
        <Route path='/Sobre' element={<Sobre />}/>
        <Route path='/Seguranca' element={<Seguranca />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default App