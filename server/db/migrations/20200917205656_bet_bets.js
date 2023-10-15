
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bet_bets', function(t) {
      t.increments('id').unsigned().primary();
      t.dateTime('created_at', { precision: 6 }).notNull().defaultTo(knex.fn.now(6));
      t.dateTime('updated_at', { precision: 6 }).notNull().defaultTo(knex.fn.now(6));
      t.integer('bet_id').notNull();
      t.integer('user_id').notNull();
      t.boolean('paid').notNull().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bet_bets');
};
