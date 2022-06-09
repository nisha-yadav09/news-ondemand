import '../NewsPage/NewsPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';
import BarChart from "../../components/BarChart/BarChart";


export default function NewsPage({ setUser }) {
    
    const [isBusy, setBusy] = useState(true)
    const [news, setNews] = useState([]);
    const [userData, setUserData] = useState({});

    useEffect(function () {
        async function getNews() {
            const trends = await newsAPI.getAll();
            const news = trends.filter(function (n) {
                return n.tweet_volume !== null
            })
            setBusy(false);
            setNews(news);
            setUserData({
                labels: news.map((data) => data.name),
                datasets: [
                  {
                    label: "What's Trending Today",
                    data: news.map((data) => data.tweet_volume),
                    backgroundColor: [
                      "rgba(75,192,192,1)",
                      "#ecf0f1",
                      "#50AF95",
                      "#f3ba2f",
                      "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                  },
                ],
              })
        }
        getNews();
        console.log(news);
    }, []);

    return (
        <>
           {(isBusy ? <p/> : <div className="App">
                <div style={{ width: 700 }}>
                    <BarChart chartData={userData} />
                </div>
            </div>)}
        </>

    );
}
