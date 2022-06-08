const express = require('express');
const router = express.Router();
const newsCtrl = require('../../controllers/api/news');

// GET /api/news
 router.get('/', newsCtrl.getNews);
// GET /api/news/science
router.get('/science', newsCtrl.getNewsScience);

module.exports = router;