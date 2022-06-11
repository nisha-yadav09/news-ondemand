import '../NewsPage/NewsPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import NavBar from '../../components/NavBar/NavBar';
import Drawer from '../../components/Drawer/Drawer';
export default function NewsPage({ user, setUser }) {
    
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
                    label: "What's Trending Today - USA",
                    data: news.map((data) => data.tweet_volume),
                    backgroundColor: [
                      "#77628c",
                      "#ecf0f1",
                      "#50AF95",
                      "#f3ba2f",
                      "#2a71d0",
                    ],
                    borderColor: "#77628c",
                    borderWidth: 2,
                  },
                ],
              })
        }
        getNews();
    }, []);

    return (
        <>
        <Drawer user={user} setUser={setUser} />
        
           {(isBusy ? <p/> : <div className="graph-div" style ={{width :'60%' , textAlign: 'center', marginTop: '5%', marginLeft: '25%'}}>
                {/* <div className="App-div" style={{ width: 700 }}>
                    <BarChart chartData={userData} />
                </div> */}
                <div  >
                    <LineChart chartData={userData} />
                </div>
            </div>)}
        </>
    );
}