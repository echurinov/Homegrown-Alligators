// Where the project object is specified


const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  }
});

module.exports = Project = mongoose.model('project', ProjectSchema);