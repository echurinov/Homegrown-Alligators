// Where the calendar event is specificed (?)


const mongoose = require('mongoose');

const CalendarEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  startData: {
    type: Date,
    required: true
  },
  endData: {
    type: Date,
    required: true
  },
  color: {
    type: Number,
    required: true
  }
});

module.exports = CalendarEvent = mongoose.model('calendar event', CalendarEventSchema);