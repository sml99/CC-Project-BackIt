const Project = require('../models/project');

exports.getAllProjects = async (req, res) => {
  console.log('🚀 ~ Project:', Project);
  try {
    console.log('🚀 ~ exports.getAllProjects= ~ req:', req);
    const projects = await Project.find();
    console.log('🚀 ~ exports.getAllProjects= ~ projects:', projects);

    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (e) {
    console.log('🚀 ~ exports.getAllProjects= ~ e:', e);
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
    console.log('🚀 ~ exports.getProject= ~ e:', e);
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
    console.log('🚀 ~ exports.createProject= ~ e:', e);
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
    console.log('🚀 ~ exports.updateProject= ~ e:', e);
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
    console.log('🚀 ~ exports.deleteProject ~ e:', e);
    res.status(400).json({
      status: 'fail'
    });
  }
};
