import logo from '../assets/img/logo-pink.svg'
import '../style/header.css'

export default function Header () {
    return (
        <header>
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/about">A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}  