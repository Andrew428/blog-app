const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog");

router.get('/getPost/:id',  blogController.getPost);

router.get('/getPosts',  blogController.getPosts);

router.post('/createPost',  blogController.createPost);

router.get('/deletePost/:id',  blogController.deletePost);

module.exports = router;
