import './Footer.css'

function Footer(){
    return(
        <footer>
            <div className='total-footer'>   
                <div>
                    <div className='logo-footer'>
                        <img src="https://i0.wp.com/fazerfestas.com/wp-content/uploads/2017/01/Barbie-Logo-Fundo-Escuro-02.png?fit=1000%2C494&ssl=1" alt="" />
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
                        <li><h1>Product</h1></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Database Designer</a></li>
                        <li><a href="#">Business Process Editor</a></li>
                        <li><a href="#">Web Apps Designer</a></li>
                        <li><a href="#">Integrations</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Sucess Stories</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Product Updates</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Plataforms Comparison</a></li>
                    </ul>
                    <ul>
                        <li><h1>Company</h1></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Partner Program</a></li>
                        <li><a href="#">Find a Partner</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">For Investors</a></li>
                        <li><a href="#">Professional Services</a></li>
                    </ul>
                    <ul>
                        <li><h1>Learn & Get Help</h1></li>
                        <li><a href="#">Barbie Site</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">ROI Calculator</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Roadmap</a></li>
                    </ul>
                    <ul>
                        <li><h1>Community</h1></li>
                        <li><a href="#">Discord Community</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </nav>
            </div>
            <div className='direitos-reservados'>
                <ul>
                    <li><p>© 2023 Barbie Site</p></li>
                    <div>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#"><img src="src\assets\images\language-logo.png" alt="" />Language</a></li>
                    </div>      
                </ul>
            </div>
        </footer>
    )   
}

export default Footer