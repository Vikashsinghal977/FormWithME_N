const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    massbox:{
        type:String,
        required: true
    },
    dob:{
        type:Date,
        required:true
    }
})

const Registers = new mongoose.model("data", employeeSchema);

module.exports = Registers