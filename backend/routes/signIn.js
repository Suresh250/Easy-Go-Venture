// backend/routes/signIn.js
const express = require('express');
const router = express.Router();
const db = require('../config/database'); // This now imports the shared MySQL connection

// Endpoint to handle sign-up data
router.post('/register', (req, res) => {
  const { emailOrPhone, firstName, lastName, gender, birthday, password } = req.body;

  // Step 1: Check if email already exists
  const checkQuery = 'SELECT * FROM users WHERE email_Or_Phone = ?';
  db.query(checkQuery, [emailOrPhone], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length > 0) {
      // If the email already exists, send a response to prompt login
      return res.status(400).json({ message: 'Email already exists. Please log in.' });
    }

    // Step 2: If email doesn't exist, insert new user
    const insertQuery = 'INSERT INTO users (email_Or_Phone, first_Name, last_Name, gender, birthday, password) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(insertQuery, [emailOrPhone, firstName, lastName, gender, birthday, password], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error creating account' });
      }

      // Send success message
      res.status(201).json({ message: 'Account created successfully!' });
    });
  });
});

module.exports = router;
