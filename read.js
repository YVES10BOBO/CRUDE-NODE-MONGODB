// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function readDocument() {
//   try {
//     await client.connect();
//     const database = client.db("ECOMMERCE");
//     const collection = database.collection("products");

//     const query = { name: "John Doe" };
//     const document = await collection.findOne(query);
//     console.log(document);
//   } finally {
//     await client.close();
//   }
// }

// readDocument().catch(console.dir);



// to check any id data i what


    // const { MongoClient, ObjectId } = require('mongodb');

    // const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(uri);

    // async function readDocumentById(id) {
    // try {
    //     await client.connect();
    //     const database = client.db("ECOMMERCE");
    //     const collection = database.collection("products");

    //     const query = { _id: new ObjectId(id) };
    //     const document = await collection.findOne(query);
    //     if (document) {
    //     console.log("Found Document:");
    //     console.log(document);
    //     } else {
    //     console.log(`Document with _id ${id} not found.`);
    //     }
    // } finally {
    //     await client.close();
    // }
    // }

    // // Accept _id as a command line argument (node read.js <_id>)
    // const id = process.argv[2];
    // readDocumentById(id).catch(console.error);




//  users...

    
    const { MongoClient, ObjectId } = require('mongodb');

    const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    async function readDocumentById(id) {
    try {
        await client.connect();
        const database = client.db("ECOMMERCE");
        const collection = database.collection("users");

        const query = { _id: new ObjectId(id) };
        const document = await collection.findOne(query);
        if (document) {
        console.log("Found Document:");
        console.log(document);
        } else {
        console.log(`Document with _id ${id} not found.`);
        }
    } finally {
        await client.close();
    }
    }

    // Accept _id as a command line argument (node read.js <_id>)
    const id = process.argv[2];
    readDocumentById(id).catch(console.error);
