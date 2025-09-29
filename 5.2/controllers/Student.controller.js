const Student = require('../models/student.model');

// Create student
const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get all students
const getStudents = async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).json(allStudents);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get one student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update student by ID
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // important for returning updated doc
        );
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete student by ID
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.status(200).send("Student deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};