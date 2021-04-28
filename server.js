const mongoClient = require("mongodb").MongoClient;
require('dotenv').config()

const url = process.env.URL


var assert = require('assert');

const insertDocument = function(db, callback) {
    db.collection('wednesday_plan').insertOne( { //* collection is a table

        "id" : "2",
        "category" : "personal",
        "name" : "cleaning",
        "description" : "Clean the flat.",
        "isComplete" : false

    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the ToDoList collection");
        callback();
    });
};


mongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('connected');
    const db = client.db('ToDoList'); //! ToDoList is my DB
    insertDocument(db, function() {
        client.close();
    });
    
});

//ToDo: to update collection use db.collection('name').updateOne/updateMany({}); to remove use .deleteOne/deleteMany({}); to search in collection use .find()
// https://docs.microsoft.com/fr-fr/azure/cosmos-db/mongodb-samples



