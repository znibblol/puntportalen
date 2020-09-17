
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bet_bets', function(t) {
      t.increments('id').unsigned().primary();
      t.dateTime('created_at').notNull();
      t.dateTime('updated_at').notNull();
      t.integer('bet_id').notNull();
      t.integer('user_id').notNull();
      t.boolean('paid').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bet_bets');
};
