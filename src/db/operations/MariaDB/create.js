const { options } = require('./options')
const knexmdb = require ('knex')(options)

knexmdb.schema.createTable('productos', function (table) {
    table.increments('id');
    table.string('title');
    table.float('price');
    table.string('url');
  })
  .then(()=> console.log ( " tabla productos creada")) 
  .catch((err) => {console.log(err); throw err})
  .finally(()=> {knexmdb.destroy()})