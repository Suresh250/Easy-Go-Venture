const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Endpoint to handle booking
router.post('/addBooking', (req, res) => {
  const { email, travelDate, members, departureTime } = req.body;

  const insertQuery = `
    INSERT INTO bookings (user_email, travel_date, members, departure_time) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(insertQuery, [email, travelDate, members, departureTime], (err, result) => {
    if (err) {
      console.error('Error adding booking:', err);
      return res.status(500).json({ message: 'Error storing booking' });
    }
    res.status(201).json({ message: 'Booking added successfully!' });
  });
});

module.exports = router;
