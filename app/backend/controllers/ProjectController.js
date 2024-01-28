const Project = require('../models/project');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail'
    });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail'
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail'
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail'
    });
  }
};
