exports.up = function tokenMigrationUp(knex) {
  return knex.schema.createTable("user_tokens", (t) => {
    t.increments("id").unsigned().primary();
    t.integer("user_id").unsigned().index().references("id").inTable("users");
    t.text("token");
  });
};

exports.down = function tokenMigrationDown(knex) {
  return knex.schema.dropTable("user_tokens");
};
