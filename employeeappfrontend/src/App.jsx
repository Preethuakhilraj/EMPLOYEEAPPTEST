import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Form from './Pages/Form';
import Main from './Pages/Main';
import Privateroutes from './Pages/Privateroutes';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Privateroutes/>}>
           <Route path="/dashboard" element={<Main child={<Dashboard/>}/>} />
          <Route path="/form" element={<Main child={<Form/>} />}/>
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
