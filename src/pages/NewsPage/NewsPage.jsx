
import '../AuthPage/AuthPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';

export default function NewsPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [news, setNews] = useState([]);

    useEffect(function () {
        async function getNews() {
            const trends = await newsAPI.getAll();
            const news = trends.filter(function(n){
                return n.tweet_volume !== null
            })
            setBusy(false);
            setNews(news);
        }
        getNews();
        console.log(news);
    }, []);

    return (
        <>
            <h2> <h1>🗺</h1> What's Trending </h2>
            {isBusy ? (<p></p>) : (
               news.map(function (d, id) {
                    return <li>{d.name} {d.tweet_volume}</li>;
                })
            )}
        </>
    );
}



