const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,   // student name is required
        trim: true
    },
    regNo: {
        type: String,
        required: true,
        unique: true      // ensures no duplicate registration numbers
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1,
        max: 5            // assuming 1st to 5th year
    }
}, { timestamps: true });

const Student = model('students', studentSchema);

module.exports = Student;