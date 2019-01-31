const users = require('./users');

module.exports = (version, app, db) => {
  users(version, app, db);
};
