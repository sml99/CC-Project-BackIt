const express = require('express');
const router = express.Router();

// Comments
router.post('/:id/comments', (req, res) => {
  // Post a comment logic here
});

router.get('/:id/comments', (req, res) => {
  // Get all comments for a specific project logic here
});

router.delete('/:id/comments/:commentId', (req, res) => {
  // Delete a comment logic here
});


module.exports = router;
