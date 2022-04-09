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

  async saveProduct(product){
        try{
           const addNewProduct = {
                title: product.title,
                price: product.price,
                url: product.url
            }

            const addprod = await db.insert("productos", options, addNewProduct)
            return addNewProduct
    
        } catch(error){
            throw new Error("Se produjo un error al guardar el producto : " +  error.message)
        }
      }
}
     
module.exports = ProductContainerMDB