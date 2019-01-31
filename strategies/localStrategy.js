const LocalStrategy = require('passport-local').Strategy;

const localStrategy = new LocalStrategy((username, password, done) => {
  let user = { name: 'Nathan Daniel', description: 'This is a description.', image: 'some url' };

  return done(null, user);
});

module.exports = { localStrategy };