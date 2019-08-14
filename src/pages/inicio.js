import React, {useState, useEffect} from 'react';
import './inicio.css';
import api from '../services/api';

export default function Inicio(props){
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function loadNews(){
            const response = await api.get('everything?language=pt&sortBy=publishedAt&pageSize=10&apiKey=e732893c048b46488389b15301b0a51d&q=Marvel');
            setNews(response.data.articles);
            
        }
        loadNews();
    }, [props.pagina]);
    return(
        <div className='news'>
            {news.length > 0 ? news.map(noticia => (
                <div className='news-card'>
                    <div className='news-img-container'>
                        <img className='news-img' alt='' src={noticia.urlToImage} />
                    </div>
                    <p className='news-titulo'>{noticia.title}</p>
                    <div className='news-autor'>
                        <img alt='' src='https://avatars3.githubusercontent.com/u/20321685?v=4' />
                        <p>Por: {noticia.author.substring(0,20)} - {new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}</p>

                    </div>
                    <div className='news-body'>
                        <p>{noticia.description}</p>
                    </div>
                    <div className='news-tags'>
                        <ul>
                            <li>
                                Tags:&nbsp;
                            </li>
                            <li>
                                Herois,&nbsp; 
                            </li>
                            <li>
                                Marvel
                            </li>
                        </ul>
                    </div>
                </div>     
            )) : <p>Sem Notícias</p>}                          
        </div>
    );
}