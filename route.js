const express = require('express');
const router =express.Router();
const studentController =require('./controller.js')

router.get('/students',studentController.getAllStudents);
router.get('/students/:ID',studentController.getStudentsById);
router.post('/students/',studentController.addNewStudent);
router.put('/students/:ID',studentController.editStudent);
router.delete('/students/:ID',studentController.deleteStudent);

module.exports=router;