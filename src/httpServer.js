
const app = require('./app')

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const ProductosDB = require('./api/class/productodb')
const Productos = require('./api/class/producto')
const HistoryChat = require('./api/class/historychat')
const storProd = new Productos()
const storProdDB = new ProductosDB
const history = new HistoryChat()


// ----------------socket-----------------------------------

io.on('connection', async (socket) => {

    //----------------------- socket mensajes 
    const message = await history.loadMessage()
    console.log("usuario Conectado")
    socket.emit('messages', message )
    
    socket.on('new-message',async data => {
        await history.saveMessage(data)
        const message2 = await history.loadMessage()
        io.sockets.emit('messages', message2 );
    });

//----------------------- socket productos

    socket.emit('products', storProd.productsAll)

    socket.on('newProd', async dataProd =>{
        const listdb = await storProdDB.listProds()
        console.log(listdb)
        storProd.saveProduct(dataProd)

        io.sockets.emit('products', storProd.productsAll);
    })

    })

//--------------- Server ------------------


module.exports = httpServer