
const app = require('./app')

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const ProductosDB = require('./api/class/productodb')
const HistoryChatDB = require('./api/class/historychatdb')

const storProdDB = new ProductosDB
const historyDB = new HistoryChatDB

// ----------------socket-----------------------------------

io.on('connection', async (socket) => {


    //----------------- primer carga a la base

    const loadMessage = await historyDB.listMessages()
    const loadProducts = await storProdDB.listProds() 

    //----------------------- socket mensajes 

    socket.emit('messages', loadMessage )
    
    socket.on('new-message',async data => {
        await historyDB.saveMessage(data)
        const message2 = await historyDB.listMessages()
        io.sockets.emit('messages', message2 );
    });

//----------------------- socket productos

    socket.emit('products', loadProducts)

    socket.on('newProd', async dataProd =>{
   
        await storProdDB.saveProduct(dataProd)
        const listdb = await storProdDB.listProds()
        io.sockets.emit('products', listdb);
    })

    })

//--------------- Server ------------------


module.exports = httpServer