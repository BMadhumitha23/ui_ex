// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse incoming request bodies as JSON

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/student_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define the Student schema
const StudentSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  age: Number,
  email: String,
});

// Create the Student model based on the schema
const Student = mongoose.model('Student', StudentSchema);

// CRUD Routes

// GET: Retrieve all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Create a new student
app.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT: Update an existing student by ID
app.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete a student by ID
app.delete('/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Search for a student by roll number
app.get('/students/search/:rollno', async (req, res) => {
  try {
    const student = await Student.findOne({ rollno: req.params.rollno });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));