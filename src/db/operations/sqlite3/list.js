const { options } = require('./options')
const knexmdb = require ('knex')(options)


knexmdb('chatlog').select('*')
    .then((rows)=> rows.map((chat)=> console.log ("id: " + chat.id + " - Title: " + chat.text)))
    .catch((err)=> {console.log(err); throw err})
    .finally(()=> {knexmdb.destroy()})