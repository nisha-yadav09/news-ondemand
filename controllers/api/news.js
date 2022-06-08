const fetch = require('node-fetch');

const token = process.env.token;
const rootURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cd4783bfbd78462e998ba195397f0913';
module.exports = {
   getNews,
  };

async function getNews(req, res) {
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
  const responseData = await response.text();
  console.log(responseData);
  //res.json(responseData)
 // res.send(responseData)
  res.json(responseData);
  }