const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@hero.okhxz.mongodb.net/?retryWrites=true&w=majority&appName=hero')
        console.log("db connected Successfully");
     }
    catch (error) { 
        console.error('Database connection error:', error);
    }

};
    module.exports = connectDB;