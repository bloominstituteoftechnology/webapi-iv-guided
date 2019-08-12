exports.up = function(knex, Promise) {
  return knex.schema.createTable('shouts', tbl => {
    tbl.increments();
    tbl.string('shout').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shouts');
};
