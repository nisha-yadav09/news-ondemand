const fetch = require('node-fetch');

const token = process.env.token;
const twitterToken = process.env.TWITTER_TOKEN;
const newsToken = process.env.NEWS_TOKEN;

module.exports = {
   getNews,
   getNewsScience,
   getNewsTech,
   getNewsBusiness,
  };

async function getNews(req, res) {
  const rootURL = 'https://api.twitter.com/1.1/trends/place.json?id=23424977';
  console.log(rootURL);
  const options = {
    headers: {
      Authorization: `Bearer ${twitterToken}`
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
    const rootURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsToken}&category=science`;
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
    res.json(responseData.articles);
    }

  async function getNewsTech(req, res) {
    const rootURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsToken}&category=technology`;
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
    res.json(responseData.articles);
  }

async function getNewsBusiness(req, res) {
  const rootURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsToken}&category=business`;
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
  res.json(responseData.articles);
}