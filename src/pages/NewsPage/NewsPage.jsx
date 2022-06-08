
import '../AuthPage/AuthPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';

export default function NewsPage({ setUser }) {
  // const [showSignUp, setShowSignUp] = useState(false);
  const [news, setNews] = useState({});
  useEffect(function() {
    async function getNews() {
      const news = await newsAPI.getAll();
      setNews(JSON.parse(news));
    }
    getNews();
  }, []);

  return (
    <>
    <h2> <h1>🗺</h1> News OnDemand </h2>
    {
        news.articles.map(function (d) {
          return <li>{d.title}</li>;
        })
    }
    </>
  );
}


