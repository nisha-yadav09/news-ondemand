import '../NewsPage/NewsPage.css';
import { useState, useEffect } from 'react';
import * as newsAPI from '../../utilities/news-api';
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import Drawer from '../../components/Drawer/Drawer';
import Card from '@mui/material/Card';

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
                options: {
                    plugins: {
                        labels: {
                            color: 'red'
                          }
                    }
                },
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
                    borderColor: "black",
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
           {(isBusy ? <p/> : <div className="graph-div" style ={{width :'60%' , textAlign: 'center', marginLeft: '25%'}}>
                <div>
                <Card style={{ color: 'black', backgroundColor: "#71a0a5", opacity: '0.8', marginBottom: '18px', marginTop: '40px', border: '2px solid black', boxShadow: "2px 2px 2px 2px black"}}>
                    <BarChart chartData={userData} />
                    </Card>
                </div>
                <div  >
                <Card style={{ backgroundColor: "#71a0a5", opacity: '0.8', border: '2px solid black', boxShadow: "2px 2px 2px 2px black"}}>
                    <LineChart chartData={userData} />
                    </Card>
                </div>
            </div>)}
        </>
    );
}