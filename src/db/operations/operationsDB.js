
module.exports = {
    list:(table, options)=>{
                const knex = require ('knex')(options)
                let list = knex(table).select('*')
                                .then(rows => {return rows})
                                .catch((err)=> {console.log(err); throw err})
                                .finally(()=> {knex.destroy()})
                return list    
                },
    
    insert:(table, options, content)=>{
                const knex = require ('knex')(options)
                let addRecord = knex(table).insert(content)
                                    .then(addRec => { return true})
                                    .catch((err)=> {console.log(err); throw err})
                                    .finally(()=> {knexmdb.destroy()})
                return addRecord
    }
}
