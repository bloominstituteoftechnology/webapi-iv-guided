exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoutouts', users => {
    users.increments();
    users.string('message').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shoutouts');
};
