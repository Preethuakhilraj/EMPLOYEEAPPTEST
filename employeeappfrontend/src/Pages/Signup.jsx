import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Image = 'https://images.pexels.com/photos/4467858/pexels-photo-4467858.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'; 

export default function Signup() {
  const [employee, setEmployee] = useState({
    username: '',
    password: '',
    role: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Employee Data:', employee);
    try {
      const response = await axios.post('http://localhost:3000/signup', employee);
      console.log(response.data);
      alert('New Employee registered');
    } catch (error) {
      console.log('Error in new registration:', error);
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
           Signup Now
            <hr/>
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="username"
              name="username"
              label="Username"
              value={employee.username}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              value={employee.password}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="role"
              name="role"
              label="Role"
              value={employee.role}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              value={employee.email}
              onChange={handleChange}
              variant="filled"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              value={employee.phone}
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
