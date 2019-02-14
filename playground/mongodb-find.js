//const {MongoClient,ObjectID} = require('mongodb').MongoClient //we pull MongoClient from mongodb libery
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    const db = client.db('TodoApp')
    // .find() -> if we want to fetch all data from 'TodoApp'
    // _id: new ObjectID('5c652e0718cba8f8580bd7aa')  -> if you want to fetch data by id 
    // .toArray() -> we store all data in array

/*     db.collection('Todos').find({
        _id: new ObjectID('5c652e0718cba8f8580bd7aa')
    })
    .toArray()
    .then((docs) => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos', err)
    }) */

    // with .count() we can count how much datas there are in some collection
  /*   db.collection('Todos').find()
    .count()
    .then((count) => {
        console.log(`Todos count: ${count}`)
    }, (err) => {
        console.log('Unable to fetch todos', err)
    }) */

    db.collection('Users').find({name: "Emir"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2))
    })
    client.close()
});