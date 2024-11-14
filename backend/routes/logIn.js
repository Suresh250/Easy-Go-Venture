const express = require('express');
const router = express.Router();
const db = require('../config/database'); // Make sure to update the path to your DB connection if needed

// Endpoint to handle login
router.post('/login', (req, res) => {
  const { emailOrPhone, password } = req.body;

  // Add your login logic here
  const loginQuery = 'SELECT * FROM users WHERE email_Or_Phone = ? AND password = ?';
  db.query(loginQuery, [emailOrPhone, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    // Check if user is found
    if (results.length > 0) {
      const user = results[0]; // Assuming the first record is the correct one
      
      // Correcting the response to include user data
      return res.status(200).json({
        message: 'Login successful!',
        user: {
          firstName: user.first_name, // Assuming the column in DB is firstName
          lastName: user.last_name,   // Assuming the column in DB is lastName
          emailOrPhone: user.email_Or_Phone,
        },
      });
    } else {
      return res.status(400).json({ message: 'Incorrect username or password' });
    }
  });
});

module.exports = router;
