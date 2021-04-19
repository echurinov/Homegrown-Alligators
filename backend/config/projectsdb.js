const mongoose = require('mongoose');
const config = require('config');
const projectsdb = config.get('projectsURI');

const connectProjectsDB = async () => {
  try {
    await mongoose.createConnection(
      projectsdb,
      {
        useNewUrlParser: true
      }
    );

    console.log('ProjectsDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectProjectsDB;