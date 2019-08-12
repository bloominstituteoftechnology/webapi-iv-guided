const db = require('./db.js');

module.exports = {
  find,
  add
};

function find() {
  return db('shouts');
}

function add(shout) {
  return db('shouts').insert(shout)
  .then(ids => {
    return db('shouts').where({ id: ids[0] }).first();
  });
}