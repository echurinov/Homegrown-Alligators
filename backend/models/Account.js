// Where the account object is specified

const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Account = mongoose.model('account', AccountSchema);