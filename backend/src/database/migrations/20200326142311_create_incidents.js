/* PORTUGUES
Todo o resto das coisas do banco eu colocarei em portugues a partir daqui*/
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function(table){
        table.increments();

        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.string('valor').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
