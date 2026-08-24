import './login.css'
function Login() {
    return (
        <main className='login-container'>
            <form className='login-card'>
            <div className='login'>
                <h2>ENTRAR NA CONTA</h2>
                <label For="email">E-mail</label>
                <input className='input' type="email" placeholder='seu@email.com'/>
                <label For="password">senha</label>
                <input className='input' type="password"/>
                <a className='conta' href="/Criarconta">criar conta</a>
                <button className='botao'>entrar</button>
            </div>
            </form>
        </main>
    )
}

export default Login