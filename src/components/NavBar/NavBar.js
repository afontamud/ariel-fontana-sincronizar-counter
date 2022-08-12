// UpperCamelCase
import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar-primary'>
            <img src="/assets/logo.png" alt="logo" />
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to=""><li><button>Nosotros</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar