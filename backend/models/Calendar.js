// Where the calendar event is specificed (?)


const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  colorIndex: {
    type: Number,
    required: true
  }
});

module.exports = Calendar = mongoose.model('calendar', CalendarSchema);