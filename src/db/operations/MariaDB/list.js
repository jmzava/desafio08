const { options } = require('./options')
const knexmdb = require ('knex')(options)


knexmdb('productos').select('*')
    .then((rows)=> rows.map((product)=> console.log ("id: " + product.id + " - Title: " + product.title)))
    .catch((err)=> {console.log(err); throw err})
    .finally(()=> {knexmdb.destroy()})