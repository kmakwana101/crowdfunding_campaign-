const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required : true,
    unique: true
  },
  campaignOwner: {
    type: Boolean,
    default : false
  },
  donator:{
    type: Boolean,
    default : false
  },
  password : {
    type : String
  }
});

const Category = mongoose.model('user', userSchema);

module.exports = Category;