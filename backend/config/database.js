// backend/config/database.js
const mysql = require('mysql2');

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

module.exports = db;
