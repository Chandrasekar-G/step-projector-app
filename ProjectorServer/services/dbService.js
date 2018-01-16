var MongoClient = require('mongodb').MongoClient;

module.exports = {
  createConnection: function() {

    MongoClient.connect("mongodb://localhost:27017").then(client=> {
            console.log('Connection established');
            module.exports.database=client.db('projector');
    }).catch(err=>{
      console.error('Unable to connect to the mongoDB server. Error:', err);

    })
  },
}
