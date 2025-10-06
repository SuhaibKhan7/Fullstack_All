const express = require('express');
const Register = require('../models/register.models');
const checkBalance = async (req, res) => { 
    const { email } = req.user;
    const user = await Register.findOne({ email })
    if (!user) {
        return res.status(400).send("User does not exist");
    }
    res.status(200).json({ balance: user.balance });
}
const depositAmount = async (req, res) => { 
    const { email } = req.user;
    const { amount } = req.body;
    const user = await Register.findOne({ email })
    if (!user) {
        return res.status(400).send("User does not exist");
    }
    user.balance += amount;
    await user.save();
    res.status(200).json({ message: "Amount deposited successfully", balance: user.balance });
}