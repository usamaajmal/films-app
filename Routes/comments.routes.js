const router = require('express')();
const auth = require('./../Middleware/auth')

const comment = require('../Controllers/comments.controller')

router.post('/add-comment', auth, comment.createComments);

module.exports = router

