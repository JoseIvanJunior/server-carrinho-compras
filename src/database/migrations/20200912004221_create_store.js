exports.up = function(knex) {
    return knex.schema.createTable('store', function(table) {
        table.increments('id').primary()
        
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.string('whatsapp').notNullable()
        table.string('email').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('store')
  };
  