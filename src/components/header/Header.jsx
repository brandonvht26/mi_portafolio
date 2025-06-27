import { Main } from '../main/Main';
import './Header.css';
import { Link } from "react-router";

const Header = () => {
    return (

        <header>
            <nav class="navbar__container">
                <p class="navbar__logo">Byrontosh</p>
                <ul class="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#expert">Experticia</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <Link to="/login">Inicio de sesión</Link>
                    <Link to="/regisro">Registro</Link>
                </ul>
            </nav>
            <Main />
        </header>

    )
}

export default Header