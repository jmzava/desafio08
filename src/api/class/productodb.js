const db = require('../../db/operations/operationsDB')
const { options } = require('../../db/operations/MariaDB/options')

class ProductContainerMDB {
    constructor() {
      this.product = [];
          }
  async listProds(){
            try {
                const listProd = await db.list("productos", options)
                return listProd
              } catch(error){
              throw new Error("Se produjo un error: " +  error.message)
          }
        }
         
      

      
      }
       
module.exports = ProductContainerMDB