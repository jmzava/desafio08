const httpServer = require('./src/httpServer')
const PORT = process.env.PORT || 8080


httpServer.listen(PORT, () => console.log('Servidor corriendo en http://localhost:8080'))

