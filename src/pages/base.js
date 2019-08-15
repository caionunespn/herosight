import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import Hamburger from '../assets/menu.svg';
import './base.css';
import {Link} from 'react-router-dom';
export default function Base(props, {history}){
    const styles = {
        mn1: 'menu-container',
        ps1:'pesquisa-container',
        h1: 'hidden-xs',
        nm1: 'nav-menu-mobile',
        s1: 'show-xs',
    }
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <div className='app-container'>
            <header>
                <div className='cabecalho-container'>
                    <div className='logo-container'>
                        <img className='logo' src={Logo} alt='' />
                        <strong>HERO SIGHT</strong>
                    </div>
                    <div className={`${styles.nm1} ${styles.s1}`} >
                        <button onClick={() => setMenuAberto(!menuAberto)} type="button" aria-label="Menu">
                            <img src={Hamburger} alt='' />
                        </button>
                        {menuAberto ? (<nav className='nav-mobile'>
                            <div className='nav-mobile-container'>
                                <Link onClick={() => setMenuAberto(false)} to='/'>INICIO</Link>
                                <Link onClick={() => setMenuAberto(false)} to='/equipe'>EQUIPE</Link>
                                <Link onClick={() => setMenuAberto(false)} to='/contato'>CONTATO</Link>
                            </div>
                        </nav>) : null}
                    </div>
                    <div className={`${styles.mn1} ${styles.h1}`}>
                        <nav>
                            <ul>
                            <li>
                                <Link to='/'>INICIO</Link>
                            </li>
                            <li>
                                <Link to='/equipe'>EQUIPE</Link>
                            </li>
                            <li>
                                <Link to='/contato'>CONTATO</Link>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`${styles.ps1} ${styles.h1}`}>
                    <input placeholder='Pesquisa' type='text' />
                    <button type='submit'>PESQUISAR</button>
                </div>
            </header>
            {props.children}
            <footer>
                <div className='redes'>
                    <div><strong>HERO SIGHT</strong></div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                FACEBOOK
                                </li>
                                <li>
                                TWITTER
                                </li>
                                <li>
                                INSTAGRAM
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='charme'>
                    <img className='logo' src={Logo} alt='' />
                </div>
            </footer>
        </div>
    );
}