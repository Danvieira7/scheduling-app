const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    date: {
        type: Number,
        required: true
    },
    day: { 
        type: String, 
        required: true 
    },
    month: {
        type: String, 
        required: true 
    },
    time: {
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);