import React, {useState, useEffect} from 'react';
import './main.css';
import Inicio from './inicio';
import Equipe from './equipe';
import Contato from './contato';
import api from '../services/api';
import Logo from '../assets/logo.png';
export default function Main({history}){

    const [topNews, setTopNews] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        async function loadTopNews(){
            const response = await api.get('everything?language=pt&sortBy=relevancy&pageSize=25&apiKey=e732893c048b46488389b15301b0a51d&q=Marvel');
            setTopNews(response.data.articles);
            
        }
        loadTopNews();
    }, []);
    return(
        <div className='app-container'>
            <header>
                <div className='cabecalho-container'>
                    <div className='logo-container'>
                        <img className='logo' src={Logo} alt='' />
                        <strong>HEROES SIGHT</strong>
                    </div>
                    <nav className='menu-container'>
                        <ul>
                        <li>
                            <button onClick={() => setPage(0)}>INICIO</button>
                        </li>
                        <li>
                            <button onClick={() => setPage(1)}>EQUIPE</button>
                        </li>
                        <li>
                            <button onClick={() => setPage(2)}>CONTATO</button>
                        </li>
                        </ul>
                    </nav>
                </div>
                <div className='pesquisa-container'>
                    <input placeholder='Pesquisa' type='text' />
                    <button type='submit'>Search</button>
                </div>
            </header>
            
            <div className='corpo-container'>
                {page===0 ? <Inicio pagina={page}/> : page===1 ? <Equipe /> : <Contato />}
                <div className='topNews-container'>
                    <div className='topNews-header'>
                        <strong>Em Destaque</strong>
                    </div>
                    {topNews.length > 0 ? topNews.map(topNoticia => (
                        <div className='topNews-card'>
                            <img className='topNews-img' alt='' src={topNoticia.urlToImage} />
                            <strong className='topNews-titulo'>{topNoticia.title}</strong>
                        </div>
                    )) : <p> Sem noticias em destaque</p>}
                </div>
            </div>
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