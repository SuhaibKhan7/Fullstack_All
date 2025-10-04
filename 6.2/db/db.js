// getting-started.js
const mongoose = require('mongoose');

dbConnect().catch(err => console.log(err));

async function dbConnect() {
    await mongoose.connect('mongodb+srv://admin:admin@hero.okhxz.mongodb.net/?retryWrites=true&w=majority&appName=hero');

    console.log("Database connected")
}
module.exports=dbConnect