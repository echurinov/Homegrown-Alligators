const mongoose = require('mongoose');
const config = require('config');
const membersdb = config.get('membersURI');

const connectMembersDB = async () => {
  try {
    await mongoose.createConnection(
      membersdb,
      {
        useNewUrlParser: true
      }
    );

    console.log('MembersDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectMembersDB;