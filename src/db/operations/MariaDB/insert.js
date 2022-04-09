const { options } = require ('./options')
const knexmdb = require('knex')(options)

const producto = [
    { title: 'producto1', price: 1111, url:'aaca va la imagen1'},
    { title: 'producto2', price: 2222, url:'aaca va la imagen2'},
    { title: 'producto3', price: 3333, url:'aaca va la imagen3'}
]

knexmdb('productos').insert(producto)
    .then(()=>console.log("datos ingresados"))
    .catch((err)=> {console.log(err); throw err})
    .finally(()=> {knexmdb.destroy()})
