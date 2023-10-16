exports.up = function (knex, Promise) {
  return knex.schema.createTable("bet_main", (t) => {
    t.increments("id").unsigned().primary();
    t.dateTime("created_at", { precision: 6 })
      .notNull()
      .defaultTo(knex.fn.now(6));
    t.dateTime("updated_at", { precision: 6 })
      .notNull()
      .defaultTo(knex.fn.now(6));
    t.text("description").notNull();
    t.integer("author_id").notNull();
    t.boolean("secret").notNull().defaultTo(0);
    t.boolean("type_of").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bet_main");
};
