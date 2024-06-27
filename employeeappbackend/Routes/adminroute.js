const express = require('express');
const router = express.Router();
const Model = require('../model/Model');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
require('../connection/connection'); // Corrected path to your connection file
function verifyToken(req,res,next){
let token=req.headers.token;
try {
  if(!token) throw 'Unauthorized access'
  let payload=jwt.verify(token,'000')
  if (!payload)throw 'Unauthorized access'
  next()
} catch (error) {
  res.json({message:error})
}
}
router.get('/view',  async (req, res) => {
  try {
    const dashboards = await Model.find();
    console.log(dashboards)
    res.status(200).json(dashboards);
  } catch (err) {
    console.error('Error retrieving dashboards:', err);
    res.status(500).json({ message: 'Error retrieving dashboards', error: err.message });
  }
});

router.post('/add', verifyToken,async (req, res) => {
  try {
    const { name, designation, location, salary } = req.body;
    if (!name || !designation || !location || !salary) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newEmployee = new Model({ name, designation, location, salary });
    await newEmployee.save();
    console.log(newEmployee).
    res.status(201).json(newEmployee); // Status code 201 for successful creation
  } catch (err) {
    console.error('Error adding new employee:', err);
    res.status(500).json({ message: 'Error adding new employee', error: err.message });
  }
});

router.put('/edit/:id', verifyToken, async (req, res) => {
  try {
    const updatedEmployee = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(updatedEmployee); // Return the updated document
  } catch (err) {
    console.error('Error updating employee:', err);
    res.status(500).json({ message: 'Error updating employee', error: err.message });
  }
});

router.delete('/remove/:id', async (req, res) => {
  try {
    const deletedEmployee = await Model.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ message: 'Error deleting employee', error: err.message });
  }
});

module.exports = router;
