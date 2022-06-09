import '../NewsPage/NewsPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';

export default function NewsPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [news, setNews] = useState([]);
     let width = '500';
     let color = getRandomRGBA();

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
            <div className='chart-div'>
            {isBusy ? (<p></p>) : (
               
               news.map(function (d, id) {
                {width = width - 10}
                {color = getRandomRGBA()}
                    return (
                        <div style={{ opacity: '0.8', width:'30px' , height: `${width}px`, background:`${color}`, border:'1px solid black'}}>{d.name} {d.tweet_volume}</div>
                    ) 
                })
            )}
            </div>
        </>

    );
}

function getRandomRGBA() {
    return `rgba(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(2, 10) / 10})`;
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }