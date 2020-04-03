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

router.get("/blog/:id?", async function(req, res) {
  const { id } = req.params;
  let blogs = await BlogModel.getId(id)
  res.json(blogs);
});

module.exports = router;
