const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Please enter a comment'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    project: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',
        required: [true, 'Please enter a project']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Please enter a user']
    }
});

module.exports = mongoose.model('Comment', commentSchema);