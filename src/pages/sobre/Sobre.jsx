import './Sobre.css'
import scoob from '../../img/scoob.jpg'

function Sobre() {
    return (
        <div className='sobre-container'>
            <p className='sobre'>
                Sou um estudante de programação, esse site será meu "projeto", que vou fazer com as habilidades que eu adquirir no meu curso.
                Meu GitHub e meu Insta estão no footer, bem simples que eu fiz. A API que estou utilizando está no footer também. Acho que é isso.
                Fique com a foto do meu cachorro.
            </p>
            <img className='scoob' src={scoob} alt="meu cachorro" />
        </div>
            
    )
}

export default Sobre