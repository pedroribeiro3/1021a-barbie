import './Header.css'
import Link from './../link/Link'

function Header(){
    return(
        <header>
                <div>
                    <img src="src\assets\images\barbie-logo-topo.png"/>
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