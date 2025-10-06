const express = require('express')
const Register = require('../models/register.model')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
    const { name, email, password, balance } = req.body;
    const userExist = await Register.findOne({ email })
    if (userExist) {
        return res.status(400).send("User already exists");
    }
    const hash = bcrypt.hashSync(password, 10);
    const newUser = new Register({ name, email, password: hash, balance });
    await newUser.save();
    res.status(201).send("User registered successfully");
}
const loginUser = async (req, res) => { 
    const { email, password } = req.body;
    const user = await Register.findOne({ email })
    if (!user) {
        return res.status(400).send("User does not exist");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).send("Invalid credentials");
    }
const secretkey="helloabchello"
var token = jwt.sign({ id:user.email },secretkey , { expiresIn: '1h' });
    res.status(200).json({message: "Login successful", token: token });
}

module.exports = { registerUser, loginUser }