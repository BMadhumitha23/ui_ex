import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', email: '', course: '' });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);

  // Fetch students from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add or update a student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      // Update an existing student
      axios.put(`http://localhost:5000/api/students/${currentStudentId}`, formData)
        .then(response => {
          const updatedStudents = students.map(student =>
            student._id === currentStudentId ? response.data : student
          );
          setStudents(updatedStudents);
          setEditing(false);
          setFormData({ name: '', age: '', email: '', course: '' });
          setCurrentStudentId(null);
        })
        .catch(error => console.error('Error updating student:', error));
    } else {
      // Add a new student
      axios.post('http://localhost:5000/api/students', formData)
        .then(response => {
          setStudents([...students, response.data]);
          setFormData({ name: '', age: '', email: '', course: '' });
        })
        .catch(error => console.error('Error adding student:', error));
    }
  };

  // Edit a student
  const handleEdit = (student) => {
    setFormData(student);
    setEditing(true);
    setCurrentStudentId(student._id);
  };

  // Delete a student
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student._id !== id));
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div>
      <h1>Student Management</h1>

      {/* Form to add or edit a student */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? 'Update Student' : 'Add Student'}</button>
      </form>

      <h2>Student List</h2>
      {loading ? <p>Loading students...</p> : (
        <ul>
          {students.map(student => (
            <li key={student._id}>
              {student.name} (Age: {student.age}, Email: {student.email}, Course: {student.course})
              <button onClick={() => handleEdit(student)}>Edit</button>
              <button onClick={() => handleDelete(student._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
