module.exports = {
    mariaDB:{
        client: 'mysql',
        connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : '',
        database : 'ecommerce'

    }},
    sqlite3:{
        client: 'sqlite3',
        connection: {filename: './src/db/ecommerce.sqlite' },
        useNullAsDefault: true
    }
}