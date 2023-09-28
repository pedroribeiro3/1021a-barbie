import './Header.css'
import LinkNav from '../linknav/LinkNav'
import LogoTopo from './../../assets/images/barbie-logo-topo.png'

function Header(){
    return(
        <header>
                <div>
                    <img src={LogoTopo}/>
                </div>
                <nav className='navegacao-header'>
                    <ul>
                        <li><LinkNav url="/" texto='Home'/></li>
                        <li><LinkNav url="/noticias" texto='Notícias'/></li>
                        <li><LinkNav url="/sobre" texto='Sobre'/></li>
                        <li><LinkNav url="/contato" texto='Contatos'/></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header