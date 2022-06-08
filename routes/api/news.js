const express = require('express');
const router = express.Router();
const newsCtrl = require('../../controllers/api/news');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET news
router.get('/', ensureLoggedIn, newsCtrl.getNews);


module.exports = router;