const Appointment = require("../models/appointment");

module.exports = {
    getAllAppointments,
    makeAppointment,
    deleteAppointment
}

async function getAllAppointments(req, res) {
    await Appointment.find({}).then( data => {
        res.status(200).json(data);
    })
}

function makeAppointment(req, res) {
    const appt = new Appointment(req.body[0]);
    try{
        appt.save();
        res.json(appt);
        
    } catch (err) {
        res.status(400).json(err);
    }
}

function deleteAppointment(req, res) {
    Appointment.findById({_id: req.body._id}, function(err, appt){
        appt.remove();
        appt.save();
    })
}