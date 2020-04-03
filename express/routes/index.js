const express = require('express'),
  router = express.Router(),
  BlogModel = require('../models/blogModel');


router.get("/", async function(req, res) {
  res.json("My Blog").status(200);
});

router.get("/all", async function(req, res) {
  let blogs = await BlogModel.getBlogs()
  res.json(blogs);
});


module.exports = router;
