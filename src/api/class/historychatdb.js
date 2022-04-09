const db = require('../../db/operations/operationsDB')
const { options } = require('../../db/operations/sqlite3/options')

class ChatContainerSQLite3 {
    constructor() {
        this.message= [];
          }
  async listMessages(){
            try {
                const listchat = await db.list("chatlog", options)
                return listchat
              } catch(error){
              throw new Error("Se produjo un error: " +  error.message)
          }
        }
          }
       
module.exports = ChatContainerSQLite3