const db = require('../../db/operations/operationsDB')
const { options } = require('../../db/operations/sqlite3/options')
const moment = require('moment');

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
    async saveMessage(data){
            try{
                const newMessage = {
                    email: data.email,
                    text: data.text,
                    date: moment().format('L LTS')
                }
                const addmsg = await db.insert("chatlog", options, newMessage)
            }catch(e){
                 throw new Error(e.message)
                }
            
            }
}
       
module.exports = ChatContainerSQLite3