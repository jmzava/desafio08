const options = {
    client: 'sqlite3',
    connection: {filename: './src/db/dbchat.sqlite' },
    useNullAsDefault: true
  };

  module.exports = { options }