const Joi = require('joi');
const Project = require('../models/projects.model');

const projectSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = {
  insert,
  list,
  get,
};

async function insert(project) {
  project = await Joi.validate(project, projectSchema, {abortEarly: false});
  return await new Project(project).save();
}

async function list() {
  return await Project.find();
}

async function get(id) {
  return await Project.find({where: {_id: id}});
}
