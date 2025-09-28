import './styles.css';
import homeIcon from '../../assets/home-icon.svg';

import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='menu-header'>
            <div className='header-content-container container'>
                <nav className='navbar'>
                    <NavLink to="/home" className={({isActive}) => isActive ? "menu-active" : ""}>
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "menu-active" : ""}>
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "menu-active" : ""}>
                        Sobre nós
                    </NavLink>
                </nav>
                <Link to="/">
                    <img src={homeIcon} alt="Ícone de início" />
                </Link>
            </div>
        </header>
    );
}