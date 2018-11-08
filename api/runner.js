const { API_PORT } = require('./config');
require('./lib/databases/mongo');
const app = require('./');

app.listen(API_PORT);

console.info(`Server is listening on port ${API_PORT}`);
