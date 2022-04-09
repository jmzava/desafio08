const db = require('../../db/operations/operationsDB')
const options = require('../../db/operations/configFileDB')
const moment = require('moment');

class ChatContainerSQLite3 {
    constructor() {
        this.message= [];
          }
    async listMessages(){
            try {
                const exist = await db.exist("chatlog", options.sqlite3)
                if(!exist){
                    return exist
                }
                const listchat = await db.list("chatlog", options.sqlite3)
                return listchat
              } catch(error){
              throw new Error("Se produjo un error: " +  error.message )
          }
        }
    async saveMessage(data){
            try{
                const exist = await db.exist("chatlog", options.sqlite3)
                if(!exist){
                    return exist
                }
                const newMessage = {
                    email: data.email,
                    text: data.text,
                    date: moment().format('L LTS')
                }
                const addmsg = await db.insert("chatlog", options.sqlite3, newMessage)
            }catch(e){
                 throw new Error(e.message)
                }
            
            }
}
       
module.exports = ChatContainerSQLite3 