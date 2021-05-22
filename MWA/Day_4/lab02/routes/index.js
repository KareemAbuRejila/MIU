const express = require('express');
const router = express.Router();
const controllerStudents = require('../api/controllers/students.controller');
const controllerAddresses = require('../api/controllers/addresses.controller');



router.route('/students')
    .get(controllerStudents.studetnsGetAll);
    // .post(controllerStudents.studentsAddOne);

router.route('/students/:studentId')
        .get(controllerStudents.studentsGetStudent);
router.route('/students/:studentId/addresses')
        .get(controllerAddresses.studentGetAddresses);
router.route('/students/:studentId/addresses/:addressId')
        .get(controllerAddresses.studentGetOneAdddress);






module.exports = router;