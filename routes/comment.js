const express = require('express');
const router = express.Router();

const Comment = require('../module/comment.module');
const commentController = require('../controller/comment.controller');

router.get('/', commentController.getAllCommentOfProduct);
router.post('/', commentController.writeComment);
module.exports = router;