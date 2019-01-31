const ObjectID = require("mongodb").ObjectID;

const UserCtrl = () => {

  getUsers = (db) => (req, res) => {
    db.collection('users').find({}).toArray((err, docs) => {
      if (err) {
        return res.sendStatus(500);
      }
      res.json(docs);
    });
  }

  addUser = (db) => (req, res) => {
    const user = req.body;
    db.collection('users').insertOne(user, (err, doc) => {
      if (err) {
        return res.sendStatus(500);
      }
      res.json(doc.ops[0]);
    });
  }

  updateUser = (db) => (req, res) => {
    const userDoc = req.body;
    const updatedDoc = {
      $set: userDoc
    };
    
    db.collection('users').updateOne({_id: new ObjectID(req.params.id)}, updatedDoc, (err, doc) => {
      if (err) {
        return res.sendStatus(500);
      }

      userDoc._id = req.params.id;
      res.json(userDoc);
    });
  }

  return {
    getUsers,
    addUser,
    updateUser,
  }
}

module.exports = UserCtrl();