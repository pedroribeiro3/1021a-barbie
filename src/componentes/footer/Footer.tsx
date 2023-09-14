import './Footer.css'
import Logo from "./../../assets/images/barbie-logo-rodape.png"

function Footer(){
    return(
        <footer>
            <div className='total-footer'>   
                <div>
                    <div className='logo-footer'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='redes-sociais'>
                        <ul>
                            <li><a href="#"><img src="src\assets\images\discord-logo.png" alt="" /></a></li>
                            <li><a href="#"><img src="src\assets\images\facebook-logo.png" alt="" /></a></li>
                            <li><a href="#"><img src="src\assets\images\instagram-logo.png" alt="" /></a></li>
                            <li><a href="#"><img src="src\assets\images\twitter-logo.png" alt="" /></a></li>
                            <li><a href="#"><img src="src\assets\images\youtube-logo.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><h1>Produtos</h1></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Database Designer</a></li>
                        <li><a href="#">Editor de Processos Business</a></li>
                        <li><a href="#">Web Apps Designer</a></li>
                        <li><a href="#">Integrações</a></li>
                        <li><a href="#">Soluções</a></li>
                        <li><a href="#">Indústrias</a></li>
                        <li><a href="#">Histórias de sucesso</a></li>
                        <li><a href="#">Preços</a></li>
                        <li><a href="#">Atualizações de Produto</a></li>
                        <li><a href="#">Segurança</a></li>
                        <li><a href="#">Plataformas</a></li>
                    </ul>
                    <ul>
                        <li><h1>Empresa</h1></li>
                        <li><a href="#">Carreira</a></li>
                        <li><a href="#">Programa de Parceria</a></li>
                        <li><a href="#">Ache um Parceiro</a></li>
                        <li><a href="#">Contate-nos</a></li>
                        <li><a href="#">Para Investidores</a></li>
                        <li><a href="#">Serviços Profissionais</a></li>
                    </ul>
                    <ul>
                        <li><h1>Saiba mais</h1></li>
                        <li><a href="#">Barbie Site</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Calculadora ROI</a></li>
                        <li><a href="#">Central de Ajuda</a></li>
                        <li><a href="#">Roadmap</a></li>
                    </ul>
                    <ul>
                        <li><h1>Comunidade</h1></li>
                        <li><a href="#">Comunidade do Discord</a></li>
                        <li><a href="#">Documentação</a></li>
                    </ul>
                </nav>
            </div>
            <div className='direitos-reservados'>
                <ul>
                    <li><p>© 2023 Barbie Site</p></li>
                    <div>
                        <li><a href="#">Termos de Serviço</a></li>
                        <li><a href="#">Políticas de Privacidade</a></li>
                        <li><a href="#">Idioma (PT-BR)</a></li>
                    </div>      
                </ul>
            </div>
        </footer>
    )   
}

export default Footer