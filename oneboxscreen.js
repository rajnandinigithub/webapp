// routes.js (Example using Express.js)
const express = require('express');
const router = express.Router();

router.get('/google-login', (req, res) => {
  res.render('onebox'); // Render the Onebox screen
});

module.exports = router;
