module.exports = (version, app, db) => {
  app.get('/', (req, res) => res.sendStatus(200));
};

