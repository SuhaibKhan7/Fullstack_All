const express = require('express');
const connectDB = require('./db/db');
const { 
  createStudent, 
  getStudents, 
  getStudentById, 
  updateStudent, 
  deleteStudent 
} = require('../controllers/student.controller');

const app = express();
const port = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Student routes
app.post('/students', createStudent);       // Create
app.get('/students', getStudents);          // Get all
app.get('/students/:id', getStudentById);   // Get one
app.put('/students/:id', updateStudent);    // Update
app.delete('/students/:id', deleteStudent); // Delete

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});