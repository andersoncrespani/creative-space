import './Criarconta.css'

function Criarconta() {
    return (
        <main className='login-container'>
            <form className='login-card'>
                <div className='login'>
                    <h2>criar conta</h2>
                    <label For="email">E-mail</label>
                    <input className='input' type="email" placeholder='seu@email.com' />
                    <label For="">seu nome</label>
                    <input className='input' type="text" />
                    <label For="password">senha</label>
                    <input className='input' type="password" />
                    <a className='conta' href="/Login">entrar</a>
                    <button className='botao'>criar conta</button>
                </div>

            </form>
        </main>
    )
}
export default Criarconta