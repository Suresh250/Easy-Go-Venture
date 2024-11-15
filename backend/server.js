// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'easy_go_venture'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Import routes
const signInRoutes = require('./routes/signIn');
const logInRoutes = require('./routes/logIn');
const bookingsRoute = require('./routes/bookings');

// Use routes
app.use('/api', signInRoutes);
app.use('/api', logInRoutes);
app.use('/api/bookings', bookingsRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
