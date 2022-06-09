const express = require('express');
const router = express.Router();
const newsCtrl = require('../../controllers/api/news');

// GET /api/news
 router.get('/', newsCtrl.getNews);
// GET /api/news/science
router.get('/science', newsCtrl.getNewsScience);
// GET /api/news/technology
router.get('/technology', newsCtrl.getNewsTech);
// GET /api/news/business
router.get('/business', newsCtrl.getNewsBusiness);
// GET /api/news/sports
router.get('/sports', newsCtrl.getNewsSports);
module.exports = router;