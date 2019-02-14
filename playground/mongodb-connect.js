//const {MongoClient,ObjectID} = require('mongodb').MongoClient //we pull MongoClient from mongodb libery
const {MongoClient,ObjectID} = require('mongodb')

 /* var obj = new ObjectID();
console.log(obj) */

/* var user = {name: "Emir" , age: 34}
var {name} = user;
console.log(name) */

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
 /*    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    }) */

/*      const db = client.db('TodoApp')
    db.collection('Users').insertOne({
        //_id:123, we can change defaul id in database
        name: 'Damir',
        age: 24,
        location: 'Tuzla'
    },(err,results) => {
        if(err) {
            return console.log('Unable to insert user',err)
        }
        console.log(results.ops[0]._id.getTimestamp())
        //results.ops[0]._id.getTimestamp() give us information when data was stored into db
    })  */

    client.close()
});