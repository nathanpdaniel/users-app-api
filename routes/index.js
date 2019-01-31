const main = require('./main');
const users = require('./users');

module.exports = (version, app, db) => {
  main(version, app, db);
  users(version, app, db);
};
