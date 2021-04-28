const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://maria-in-cosmos:45zECtZDzzc22hTwWGdUFPbfK5pZe2vKwjjPHbPPlI10uTKj0WlZ2vJ2EPxkxqFIPsU3i85m2z9OAGBPcBd2Ow%3D%3D@maria-in-cosmos.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@maria-in-cosmos@";
var assert = require('assert');

const insertDocument = function(db, callback) {
    db.collection('wednesday_plan').insertOne( { //* collection is a table

        "id" : "1",
        "category" : "personal",
        "name" : "groceries",
        "description" : "Pick up apples and strawberries.",
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