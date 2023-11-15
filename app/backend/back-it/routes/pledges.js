const express = require('express');
const router = express.Router();

// Pledges
router.post('/:id/pledges', (req, res) => {
  // Make a pledge logic here
});

router.get('/:id/pledges', (req, res) => {
  // Get all pledges for a specific project logic here
});

router.delete('/:id/pledges/:pledgeId', (req, res) => {
  // Cancel a pledge logic here
});

module.exports = router;
