const mongoose = require("mongoose")
const md5 = require("md5")
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "please enter a first name"]
  },
  lastname: {
    type: String,
    required: [true, "please enter a last name"]
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    lowercase: true,
    validate: [isEmail, "please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, "minimum password length is 6 "]
  },

})