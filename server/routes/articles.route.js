const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');
const { addArticleValidator } =  require('../middleware/validation');

const auth = require('../middleware/auth');

router.post('/',auth('createAny','articles'),addArticleValidator, articlesController.createArticle)




/// Categories
router.route('/categories')
.post(auth('createAny','categories'), articlesController.createCategory)
.get(auth('readAny','categories'), articlesController.getAllCategories)


module.exports = router;


