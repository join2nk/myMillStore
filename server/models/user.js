const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  userName:{type:String,required:true},
  password:{type:String,required:true},
  sessionid:{type:String},
  role:{type:String},
  logins:[{time:Date}]
})

module.exports = mongoose.model("user",UserSchema)