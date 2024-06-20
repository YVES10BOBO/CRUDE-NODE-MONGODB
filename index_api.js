const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 4000;

const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

async function connectAndStartServer() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db("ECOMMERCE");
        const collection = database.collection("users");

        // Create a new user
        app.post('/api/users', async (req, res) => {
            const { name, age, address } = req.body;

            const newUser = {
                name,
                age,
                address
            };

            const result = await collection.insertOne(newUser);
            newUser._id = result.insertedId;

            res.status(201).json(newUser);
        });

        // Get all users
        app.get('/api/users', async (req, res) => {
            const users = await collection.find({}).toArray();
            res.json(users);
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

connectAndStartServer();
