import './Header.css'
import Link from './../link/Link'
import LogoTopo from './../../assets/images/barbie-logo-topo.png'

function Header(){
    return(
        <header>
                <div>
                    <img src={LogoTopo}/>
                </div>
                <nav className='navegacao-header'>
                    <ul>
                        <li><Link texto='Home'/></li>
                        <li><Link texto='Notícias'/></li>
                        <li><Link texto='Sobre'/></li>
                        <li><Link texto='Contatos'/></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header