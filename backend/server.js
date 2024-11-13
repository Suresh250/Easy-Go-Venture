const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Replace with your MySQL username
  password: '1234',  // Replace with your MySQL password
  database: 'easy_go_venture', // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle booking
app.post('/api/book', (req, res) => {
  const { name, email, phone, tour } = req.body;

  const query = 'INSERT INTO bookings (name, email, phone, tour) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, tour], (err, result) => {
    if (err) {
      console.error('Error saving booking: ' + err.stack);
      return res.status(500).send('Error saving booking');
    }
    res.status(200).send('Booking successful');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
