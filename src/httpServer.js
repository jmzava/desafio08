
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

//----------------------- socket mensajes 

    socket.emit('messages', await historyDB.listMessages()  )
    
    socket.on('new-message',async data => {
        await historyDB.saveMessage(data)
        io.sockets.emit('messages', await historyDB.listMessages() );
    });

//----------------------- socket productos

    socket.emit('products', await storProdDB.listProds())

    socket.on('newProd', async dataProd =>{
        await storProdDB.saveProduct(dataProd)
        io.sockets.emit('products', await storProdDB.listProds());
    })

    })

//--------------- Server ------------------


module.exports = httpServer