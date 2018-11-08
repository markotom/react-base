const mongoose = require('mongoose');
const { MONGO_DB, MONGO_HOST, MONGO_PORT } = require('../../config');

mongoose.Promise = global.Promise;

const url = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
  },
);

mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => {
  console.info(`MongoDB connected to ${url}`);
});

module.exports = mongoose.connection;
