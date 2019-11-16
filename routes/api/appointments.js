const express = require('express');
const router = express.Router();
const appointmentCtrl = require("../../controllers/appointments");

router.get("/getAllAppointments", appointmentCtrl.getAllAppointments);
router.post("/makeAppointment", appointmentCtrl.makeAppointment);
// router.delete("/deleteAppointment", appointmentCtrl.deleteAppointment);

module.exports = router;