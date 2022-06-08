
import '../AuthPage/AuthPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';

export default function NewsPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [news, setNews] = useState([]);

    useEffect(function () {
        async function getNews() {
            const news = await newsAPI.getAll();
            setBusy(false);
            setNews(news);
        }
        getNews();
        console.log(news);
    }, []);

    return (
        <>
            <h2> <h1>🗺</h1> News OnDemand </h2>
            {isBusy ? (<p></p>) : (
               news.map(function (d, id) {
                    return <li>{d.title}</li>;
                })
            )}
        </>
    );
}



