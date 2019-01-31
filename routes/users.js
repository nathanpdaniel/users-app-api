const UserCtrl = require('../controllers/users');

module.exports = (version, app, db) => {
  app.get(`/${version}/users`, UserCtrl.getUsers(db));
  app.post(`/${version}/users`, UserCtrl.addUser(db));
  app.put(`/${version}/users/:id`, UserCtrl.updateUser(db));
};

