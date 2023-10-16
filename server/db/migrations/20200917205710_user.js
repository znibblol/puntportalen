exports.up = function userMigrationUp(knex) {
  return knex.schema.createTable("users", (t) => {
    t.increments("id").unsigned().primary();
    t.dateTime("created_at").notNull();
    t.dateTime("updated_at").notNull();
    t.string("email").notNull();
    t.string("first_name");
    t.string("last_name");
    t.string("residence");
    t.string("logo");
    t.string("team_name");
    t.text("hash");
    t.text("token");
  });
};

exports.down = function userMigrationDown(knex) {
  return knex.schema.dropTable("users");
};
