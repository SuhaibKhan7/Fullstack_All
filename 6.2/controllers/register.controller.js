const express = require('express')
const Register = require('../models/register.models');
const bcrypt=require('bcrypt');
const registerUser = async(req,res) => {
    const { name, email, password, balance } = req.body;
    const userExit = await Register.findOne({ email });
    if (userExit) {
       return  res.status(400).send("User already exists");
    }
    const hash = bcrypt.hashSync(password, 10);
    const newUser = new Register({
        name:name,
        email:email,
        password: hash,
        balance:balance
    });
    await newUser.save();
    res.status(201).send("User registered successfully");
}
module.exports = { registerUser }