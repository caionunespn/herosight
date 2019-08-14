import React from 'react';
import Logo from '../assets/logo.png';
import './base.css';
import {Link} from 'react-router-dom';
export default function Base(props, {history}){
    return(
        <div className='app-container'>
            <header>
                <div className='cabecalho-container'>
                    <div className='logo-container'>
                        <img className='logo' src={Logo} alt='' />
                        <strong>HERO SIGHT</strong>
                    </div>
                    <nav className='menu-container'>
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
                <div className='pesquisa-container'>
                    <input placeholder='Pesquisa' type='text' />
                    <button type='submit'>Search</button>
                </div>
            </header>
            {props.children}
            <footer>
                <div className='redes'>
                    <div><strong>SITE DE HEROIS</strong></div>
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