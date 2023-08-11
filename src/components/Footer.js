import logo from '../assets/img/logo-white.svg'
import '../style/footer.css'

export default function Footer () {
    return (
        <footer>
            <img src={logo} alt='logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}  