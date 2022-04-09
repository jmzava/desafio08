const { options } = require('./options')
require('sqlite3')
const knexmdb = require ('knex')(options)

knexmdb.schema.createTable('chatlog', function (table) {
    table.increments('id');
    table.string('email');
    table.string('text');
    table.timestamp('date');
  })
  .then(()=> console.log ( " tabla chat creada")) 
  .catch((err) => {console.log(err); throw err})
  .finally(()=> {knexmdb.destroy()})