const express = require('express');
const router = express.Router();
const controllerStudents = require('../api/controllers/students.controller');
const controllerAddresses = require('../api/controllers/addresses.controller');



router.route('/students')
    .get(controllerStudents.studetnsGetAll)
    .post(controllerStudents.addStudent);

router.route('/students/:studentId')
        .get(controllerStudents.getOneStudent)
        .delete(controllerStudents.deleteStudent)
        .put(controllerStudents.updateStudent)
        .patch(controllerStudents.updateStudent);

router.route('/students/:studentId/addresses')
        .get(controllerAddresses.getAllAddresses)
        .post(controllerAddresses.addOneAddress);

router.route('/students/:studentId/addresses/:addressId')
        .get(controllerAddresses.getOneAdddress)
        .delete(controllerAddresses.deleteAddress)
        .put(controllerAddresses.updateAddress)
        .patch(controllerAddresses.updateAddress);






module.exports = router;