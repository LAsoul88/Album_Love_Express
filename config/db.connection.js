const mongoose = require('mongoose');

require('dotenv').config();
const connectionStr = process.env.MONGODB_URI; 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionStr}`);
});

mongoose.connection.on('error', (error) => {
  console.log(`Mongoose connection error`, error);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected`);
});