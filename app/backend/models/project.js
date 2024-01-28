const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title for your project'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please enter a description for your project'],
    trim: true
  },
  goal: {
    type: Number,
    required: [true, 'Please enter a goal for your project']
  },
  category: {
    type: String,
    required: [true, 'Please enter a category for your project'],
    trim: true
  },
  projectImage: {
    type: String,
    default: ''
  },
  projectVideo: {
    type: String,
    default: ''
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Please enter a creator for your project']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  backers: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Comment'
    }
  ]
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
