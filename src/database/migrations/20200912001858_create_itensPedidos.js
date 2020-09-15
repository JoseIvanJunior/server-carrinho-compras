exports.up = function (knex) {
    return knex.schema.createTable('itemsOrders', function (table) {
        table.increments('id').primary()
        table.integer('codeOfProduct').notNullable()
        table.decimal('priceUnit').notNullable()
        table.integer('quantity').notNullable()

        table.integer('products_id').notNullable()

        table.foreign('products_id').references('id').inTable('products')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('itemsOrders')
};
