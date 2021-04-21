// Where the member object is specified

const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
      type: String,
      required: true
  },
  imageName: {
    type: String,
    required: true
  }
});

module.exports = Member = mongoose.model('member', MemberSchema);