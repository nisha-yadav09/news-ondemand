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
// GET /api/news/health
router.get('/health', newsCtrl.getNewsHealth);
// GET /api/news/entertainment
router.get('/entertainment', newsCtrl.getNewsEntertainment);

// GET /api/news/general
router.get('/general', newsCtrl.getNewsGeneral);

module.exports = router;