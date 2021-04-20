const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

if(provess.env.NODE_ENV === 'production'){
  app.use(express.static('../build'));
}

module.exports = connectDB;