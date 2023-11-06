const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');
const { addArticleValidator } =  require('../middleware/validation');

const auth = require('../middleware/auth');

router.post('/',auth('createAny','articles'),addArticleValidator, articlesController.createArticle)

router.route('/article/:id')
.get(auth('readAny','articles'),articlesController.getArticleById)
.patch(auth('updateAny','articles'), articlesController.updateArticleById)



/// Categories
router.route('/categories')
.post(auth('createAny','categories'), articlesController.createCategory)
.get(auth('readAny','categories'), articlesController.getAllCategories)


module.exports = router;


