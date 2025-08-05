const mongoose  = require("mongoose")
const {Schema} = mongoose;

const User = new Schema({
    firstName : {type: String, required: true},
    lastName : {type: String},
    emailId : {type: String, required: true, unique: true},
    password : {type: String, required: true}
})

module.exports = mongoose.model("User",User);