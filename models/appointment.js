var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
    target	: String,
    date 	: String,
    subject : String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);