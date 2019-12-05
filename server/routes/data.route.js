const express = require('express');
const asyncHandler = require('express-async-handler');
const dataController = require('../controllers/data.controller');

const router = express.Router();
module.exports = router;

router.get("/", asyncHandler(getData));
router.post("/", asyncHandler(setData));

async function getData(req, res) {
  res.json(await dataController.list());
}

async function setData(req, res) {
  res.json(await dataController.insert(req.body));
}
