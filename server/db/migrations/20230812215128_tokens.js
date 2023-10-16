exports.up = function (knex, Promise) {
  return knex.schema.createTable("user_tokens", (t) => {
    t.increments("id").unsigned().primary();
    t.integer("user_id").unsigned().index().references("id").inTable("users");
    t.text("token");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_tokens");
};
