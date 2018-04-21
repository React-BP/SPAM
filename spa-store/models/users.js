const mongoose = require('mongoose');

const regSchema = mongoose.Schema({
   name: {
      type: String, 
      required: [true, "Can't be blank"]
   },
   username:{
      type:String,
      required:[true, "Can't be blank"],
      unique: true,
      match: [/^[a-zA-z0-9]+$/, 'Is invalid'],
      index:true
   },
   password: {
      type: String,
      require: true
   },
   email:{
      type:String,
      required:[true, "Can't be blank"],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Is invalid'],
      index: true
   }
},{timestamps: true});

module.exports = mongoose.model('Users', regSchema);