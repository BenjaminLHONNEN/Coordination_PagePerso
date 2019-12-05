const Joi = require('joi');
const Data = require('../models/data.model');

const dataSchema = Joi.object({
  name: Joi.string().required(),
  labels: Joi.array().items(Joi.string().required()),
  datasets: Joi.array().items(Joi.number().required()),
});


module.exports = {
  insert,
  list,
};

async function insert(data) {
  data = await Joi.validate(data, dataSchema, { abortEarly: false });
  return await new Data(data).save();
}

async function list() {
  return await Data.find();
}
