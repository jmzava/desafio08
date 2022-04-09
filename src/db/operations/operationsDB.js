
module.exports = {
    list:async (table, options)=>{
                const knex = require ('knex')(options)
                let lista = await knex(table).select('*')
                return lista   
                }
    ,
    insert:async (table, options, content)=>{
                const knex = require ('knex')(options)
                let addRecord = await knex(table).insert(content)
                return 
    },
    exist:async(table, options)=>{
                const knex = require ('knex')(options)
                let exist = knex.schema.hasTable(table)
                return exist
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
