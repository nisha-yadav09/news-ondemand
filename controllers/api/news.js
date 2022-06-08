const fetch = require('node-fetch');

const token = process.env.token;

module.exports = {
   getNews,
   getNewsScience,
  };

async function getNews(req, res) {
  const rootURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8af68f1d04364fb89d4e560a3d4cec65';
  console.log(rootURL);
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
  console.log(responseData);
  res.json(responseData.articles);
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