const { options } = require ('./options')
const knexmdb = require('knex')(options)

const mensajes = [
    { email: 'mensaje1@pepe.com', text: "hola", date: Date.now()},
    { email: 'mensaje2@pepe.com', text: " hola como estas?", date:Date.now()},
    { email: 'mensaje3@pepe.com', text: " Yo bien vos ?", date:Date.now()}
]

knexmdb('chatlog').insert(mensajes)
    .then(()=>console.log("datos ingresados"))
    .catch((err)=> {console.log(err); throw err})
    .finally(()=> {knexmdb.destroy()})



    
