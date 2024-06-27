import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import axiosInstance from './axiosinterceptor';

const Image = 'https://images.pexels.com/photos/4467858/pexels-photo-4467858.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'; 

export default function Form() {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Employee Data:', employee);
    try {
      const response = await axiosInstance.post('http://localhost:3000/admin/add', employee);
      console.log(response.data);
      alert('New Employee added Successfully');
    } catch (error) {
      console.log('Error adding new employee:', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
      }
    }
  };
  
  return (
    <Box component="main" sx={{ marginTop: '100px', marginLeft: '200px', display: 'flex', p: 3, height: 'calc(100vh - 80px)', width: '80vw' }}>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }}>
          <Typography variant="h4" gutterBottom>
            Registration Form
            <hr/>
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              value={employee.name}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="designation"
              name="designation"
              label="Designation"
              value={employee.designation}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="location"
              name="location"
              label="Location"
              value={employee.location}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="salary"
              name="salary"
              label="Salary"
              type="number"
              value={employee.salary}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          sx={{ height: 'auto', margin: '20%', width: '100%', maxHeight: '100%', objectFit: 'cover' }}
          alt="Employee form image"
          src={Image}
        />
      </Box>
    </Box>
  );
}
