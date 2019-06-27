exports.up = function(knex, Promise) {
  return knex.schema.createTable('shouts', users => {
    users.increments();
    users.string('shout').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shouts');
};
