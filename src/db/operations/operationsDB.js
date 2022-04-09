
module.exports = {
    list:(table, options)=>{
                const knex = require ('knex')(options)
                let lista = knex(table).select('*')
                                .then(rows => {return rows})
                                .catch((err)=> {console.log(err); throw err})
                                .finally(()=> {knex.destroy()})
                return lista   
                }
    ,
    insert:(table, options, content)=>{
                const knex = require ('knex')(options)
                let addRecord = knex(table).insert(content)
                                    .then(()=>console.log("datos ingresados"))
                                    .catch((err)=> {console.log(err); throw err})
                                    .finally(()=> {knex.destroy()})
                return 
    },
    createMDB:(dbTable, options)=>{
                 const knex = require ('knex')(options)
                 knex.schema.createTable(dbTable, function (table) {
                                                                    table.increments('id');
                                                                    table.string('title');
                                                                    table.float('price');
                                                                    table.string('url');})
                                            .then(()=> console.log ( " tabla productos creada")) 
                                            .catch((err) => {console.log(err); throw err})
                                            .finally(()=> {knex.destroy()})

    },
    createSQL:(dbtablesql, options )=>{
                const knex = require ('knex')(options)
                knex.schema.createTable(dbtablesql, function (table) {
                                                                    table.increments('id');
                                                                    table.string('email');
                                                                    table.string('text');
                                                                    table.timestamp('date');
                                                                })
                                            .then(()=> console.log ( " tabla chat creada")) 
                                            .catch((err) => {console.log(err); throw err})
                                            .finally(()=> {knex.destroy()})
                                }
}
