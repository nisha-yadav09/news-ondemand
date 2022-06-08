const fetch = require('node-fetch');

const token = process.env.token;

module.exports = {
   getNews,
   getNewsScience,
  };

async function getNews(req, res) {
  const rootURL = 'https://api.twitter.com/1.1/trends/place.json?id=23424977';
  console.log(rootURL);
  const options = {
    headers: {
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAOoPdgEAAAAAJ2Yk7IA9iKx5oThc1JFds0JeBqA%3D72eF0eDJwsQxQC1BKzvYlc0ub8FfECXwVs8DAEEZgley7Jp4lq`
    }
  };

  const response = await fetch(`${rootURL}` ,options);
  const responseData = await response.text();
  //console.log((JSON.parse(responseData)));
  const data = JSON.parse(responseData);
  console.log(data[0].trends);
  res.json(data[0].trends);
  }

async function getNewsScience(req, res) {
    const rootURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8af68f1d04364fb89d4e560a3d4cec65&category=science';
    const options = {
      headers: {
        // Authorization: `token ${token}`,
        "Content-Type": "application/json",
        Accept: 'application/json;charset=utf-8',
        withCredentials: true,
        'User-Agent': '*',
      }
    };
  
    const response = await fetch(`${rootURL}`);
    const responseData = await response.json();
    console.log("hiii"+responseData.articles);
    res.json(responseData.articles);
    }