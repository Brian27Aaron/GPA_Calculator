const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Define Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

// Routes

// Render the form to input grades
app.get('/', (req, res) => {
  connection.query('SELECT * FROM subjects', (err, results) => {
    if (err) throw err;
    res.render('index', { subjects: results });
  });
});

// Handle form submission to update grades and calculate GPA
app.post('/submit', (req, res) => {
  const { subjectId, grade } = req.body;

  // Update the grades in the database
  connection.query('UPDATE subjects SET grade = ? WHERE id = ?', [grade, subjectId], (err) => {
    if (err) throw err;

    // Calculate GPA (you need to implement your GPA calculation logic)
    // For simplicity, let's assume GPA is the average of the grades
    connection.query('SELECT AVG(grade) as gpa FROM subjects', (err, results) => {
      if (err) throw err;
      const gpa = results[0].gpa;

      res.render('result', { gpa });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
