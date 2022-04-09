const db = require('../../db/operations/operationsDB')
const options = require('../../db/operations/configFileDB')

class ProductContainerMDB {
    constructor() {
      this.product = [];
          }
  async listProds(){
            try {
              const exist = await db.exist("productos", options.mariaDB)
              if(!exist){

                  return exist
              }
                const listProd = await db.list("productos", options.mariaDB)
                return listProd
              } catch(error){
              throw new Error("Se produjo un error: " +  error.message)
          }
        }

  async saveProduct(product){
        try{
          const exist = await db.exist("productos", options.mariaDB)
          if(!exist){
              return exist
          }
           const addNewProduct = {
                title: product.title,
                price: product.price,
                url: product.url
            }

            const addprod = await db.insert("productos", options.mariaDB, addNewProduct)
            return addNewProduct
    
        } catch(error){
            throw new Error("Se produjo un error al guardar el producto : " +  error.message)
        }
      }
}
     
module.exports = ProductContainerMDB