const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  username: {
    type: String,
    required : true,
    unique: true
  },
  amount: {
    type: Number,
    default : false
  },
  expirationDate : {
    type : Date
  },
  description : {
    type : String
  },
  donatedAmount : {
    type : Number,
    default : 0
  },
  status : {
    type : String,
    default : 'Active'
  },
},{timestamps : true});

const Category = mongoose.model('campaign', campaignSchema);

module.exports = Category;