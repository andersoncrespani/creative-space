import './Criarconta.css'

function Criarconta() {
    return (
        <main className='login-container1'>
            <form className='login-card1'>
                <div className='login1'>
                    <h2>criar conta</h2>
                    <label For="email">E-mail</label>
                    <input className='input1' type="email" placeholder='seu@email.com' />
                    <label For="">seu nome</label>
                    <input className='input1' type="text" />
                    <label For="password">senha</label>
                    <input className='input1' type="password" />
                    <a className='conta1' href="/Login">entrar</a>
                    <button className='botao1'>criar conta</button>
                </div>

            </form>
        </main>
    )
}
export default Criarconta