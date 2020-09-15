exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary()

        table.string('name').notNullable()
        table.string('description').notNullable()
        table.string('avatar').notNullable()
        table.string('category').notNullable()
        table.decimal('priceUnit').notNullable()
        table.integer('unitsInStock').notNullable()
        table.integer('quantityPerUnit').notNullable()

        table.integer('store_id')
        .notNullable()
        .references('id')
        .inTable('store')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        
        //table.foreign('store_id').references('id').inTable('store')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('products')
};
