import React, {useState, useEffect} from 'react';
import './main.css';
import Inicio from './inicio';
import api from '../services/api';

export default function Main({history}){

    const [topNews, setTopNews] = useState([]);
    useEffect(() => {
        async function loadTopNews(){
            const response = await api.get('everything?language=pt&sortBy=relevancy&pageSize=25&apiKey=e732893c048b46488389b15301b0a51d&q=Marvel');
            setTopNews(response.data.articles);
            
        }
        loadTopNews();
    }, []);
    return(            
            <div className='corpo-container'>
                <Inicio />
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
    );
}