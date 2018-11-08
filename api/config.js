const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const envPath = path.resolve(__dirname, `./.env.${env}`);

dotenv.config({
  path: envPath,
});

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

module.exports = process.env;
