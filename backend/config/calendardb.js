const mongoose = require('mongoose');
const config = require('config');
const calendardb = config.get('calendarURI');

const connectCalendarDB = async () => {
  try {
    await mongoose.createConnection(
      calendardb,
      {
        useNewUrlParser: true
      }
    );

    console.log('CalendarDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectCalendarDB;