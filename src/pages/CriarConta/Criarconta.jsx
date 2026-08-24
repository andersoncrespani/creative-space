import './Criarconta.css'
import { Link } from "react-router-dom"
function Criarconta() {
    return (
        <main className='login-container1'>
            <form className='login-card1'>
                <div className='login1'>
                    <h2>criar conta</h2>
                    <label className='login-texto' For="email">E-mail</label>
                    <input className='input1' type="email" placeholder='seu@email.com' />
                    <label className='login-texto' For="">seu nome</label>
                    <input className='input1' type="text" />
                    <label className='login-texto' For="password">senha</label>
                    <input className='input1' type="password" />
                    <Link className='conta1' to= "/Login">entrar</Link>
                    <button className='botao1'>criar conta</button>
                </div>

            </form>
        </main>
    )
}
export default Criarconta