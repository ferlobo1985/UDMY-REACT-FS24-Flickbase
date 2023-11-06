const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

/// MIDDLEWARE
const auth = require('../middleware/auth');

router.route('/profile')
.get(auth('readOwn','profile'), userController.profile)




module.exports = router;



