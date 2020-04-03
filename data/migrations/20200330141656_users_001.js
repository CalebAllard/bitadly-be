
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id').primary();
        tbl.text('username')
            .notNullable();
        tbl.text('password')
            .notNullable();
        tbl.text('email')
            .notNullable();
    })
    .createTable('urls', tbl => {
        tbl.increments('id').primary();
        tbl.text('short_url')
        .notNullable();
        tbl.text('shortid')
        .notNullable();
        tbl.text('target_url')
        .notNullable();
        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('urls');
};
