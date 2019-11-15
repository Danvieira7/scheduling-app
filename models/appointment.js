const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    day: { 
        type: String, 
        required: true 
    },
    Month: {
        type: String, 
        required: true 
    },
    time: {
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);