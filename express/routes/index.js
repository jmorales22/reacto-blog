const express = require('express'),
  router = express.Router(),
  blogModel = require('../models/blogModel');


router.get("/", async function(req, res) {
  res.json("My Blog").status(200);
});

router.get("/all", async function(req, res) {
  let blogs = await blogModel.getBlogs()
  res.json(blogs);
  console.log(blogs)
});


module.exports = router;
