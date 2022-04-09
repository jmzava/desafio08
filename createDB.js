const configFileDB = require('./src/db/operations/configFileDB');
const config = require('./src/db/operations/configFileDB');
const dbMDB = require('knex')(config.mariaDB);
const dbSQL = require('knex')(config.sqlite3);
const operations = require('./src/db/operations/operationsDB');

(async ()=>{
        await createTableMDB()
        await createTableSQL()
})()


async function createTableSQL(){
    try{
        await dbSQL.schema.hasTable("chatlog").then( async function(exists) {
            if (!exists) {
              await operations.createSQL("chatlog", config.sqlite3)
            } else{
                console.log("tabla en sqlite3 ya existe")

            }})
    }catch(err){
        console.log(err)
        dbSQL.destroy()
    }finally{
        dbSQL.destroy()
    }
}

async function createTableMDB(){
    try{
        await dbMDB.schema.hasTable("productos").then( async function(exists) {
            if (!exists) {
              await operations.createMDB("productos", config.mariaDB)
            } else{
                console.log("tabla en mariaDB ya existe")

            }
          });
}catch(err){
    if (err.errno === -61 ){
        console.log("el Motor de mySQL no esta levantado")
    }  if (err.errno === 1049 ){
        console.log("La database donde se creara la tabla no esta creada, por favor crear la database " + configFileDB.mariaDB.connection.database + " en el servidor de mySQL")
    }
    dbMDB.destroy()
}
finally{
    dbMDB.destroy()
}
}