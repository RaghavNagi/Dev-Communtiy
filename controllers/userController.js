const User = require("../models/userModel");
const mongoose = require("mongoose");

const registerUser = async (req,res) => {
    const {firstName,lastName,emailId,password} = req.body;

    // WE WIll Check Validation

    if(!firstName || !lastName || !emailId || !password){
        req.status(400).send({message:"Please Add ALl Fields"});
    }

    const alreadyUser = await User.findOne({emailId});
    console.log(alreadyUser);

    if(alreadyUser){
        res.status(400).json({message:"User already registered"});
    }

    // MAPPING OBJECt => Model

    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    })
    await newUser.save();

    res.status(201).json({message: "user created successfully"})
}

module.export = {registerUser};
// const loginUser = () => {

// }