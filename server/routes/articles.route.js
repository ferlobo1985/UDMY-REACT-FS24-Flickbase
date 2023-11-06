const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');

const auth = require('../middleware/auth');





/// Categories
router.route('/categories')
.post(auth('createAny','categories'), articlesController.createCategory)


module.exports = router;


