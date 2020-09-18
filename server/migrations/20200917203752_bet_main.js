
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bet_main', function(t) {
      t.increments('id').unsigned().primary();
      t.dateTime('created_at').notNull();
      t.dateTime('updated_at').notNull();
      t.text('description').notNull();
      t.integer('author_id').notNull();
      t.boolean('secret').notNull();
      t.boolean('type_of').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bet_main');
};
