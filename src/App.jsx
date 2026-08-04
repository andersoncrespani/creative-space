import { Form, Router } from 'react-router-dom'
import Header from '../src/pages/Header/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
function App() {
    return (
        <>
        <Header />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        </Routes>
        </>
    )
}

export default App