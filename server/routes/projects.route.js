const express = require('express');
const asyncHandler = require('express-async-handler');
const projectController = require('../controllers/projects.controller');

const router = express.Router();
module.exports = router;

router.get("/", asyncHandler(getData));
router.post("/", asyncHandler(setData));

async function getData(req, res) {
  res.json(await projectController.list());
}

async function setData(req, res) {
  res.json(await projectController.insert(req.body));
}
