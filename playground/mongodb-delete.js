const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    const db = client.db('TodoApp')
    //delete many
   /*  db.collection('Todos').deleteMany({text: "Eat lunch"}).then((results) => {
        console.log(results)
    }) */

    //delete one
    /* db.collection('Todos').deleteOne({text: "Eat lunch"}).then((results) => {
        console.log(results)
    }) */

    //findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({completed: false}).then((results) => {
        console.log(results)
    })
    client.close() */

    //delete using id 
    /* db.collection('Todos').deleteOne({_id: new ObjectID('5c6547a118cba8f8580be11d')}).then((results) => {
        console.log(results)
    }) */
});