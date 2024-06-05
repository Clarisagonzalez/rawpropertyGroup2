const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Function to close the connection
async function close() {
    try {
        await client.close();
        console.log('Connection to MongoDB server closed');
    } catch (err) {
        console.error('Error closing MongoDB connection:', err);
    }
}

// Example usage: Insert document into a collection
async function insertDocument() {
    try {
        const db = client.db('mydatabase'); // Replace 'mydatabase' with your database name
        const collection = db.collection('mycollection'); // Replace 'mycollection' with your collection name
        const result = await collection.insertOne({ name: 'John', age: 30 });
        console.log(`Document inserted with _id: ${result.insertedId}`);
        // Close the connection after the insertion operation is completed
        await client.close();
        console.log('Connection to MongoDB server closed');
    } catch (err) {
        console.error('Error inserting document:', err);
    }
}

// Call the insertDocument function
insertDocument();