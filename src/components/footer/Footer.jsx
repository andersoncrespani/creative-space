import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-div'>
                <ol className='footer-ol'>
                    <li className='lis'><a className='foo' href="https://github.com/andersoncrespani"> github</a></li>
                    <li className='lis'><a className='foo' href="https://www.gamerpower.com">api</a></li>
                    <li className='lis'><a className='foo' href="#">redes</a></li>
                    <li className='lis'><Link className='foo' to= "/Sobre">Sobre</Link></li>
                    <li className='lis'><Link className='foo' to= '/Seguranca'>Segurança</Link></li>
                </ol>
            </div>
        </footer>
    )
}

export default Footer