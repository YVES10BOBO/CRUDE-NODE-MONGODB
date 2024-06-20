// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function createDocument() {
//   try {
//     await client.connect();
//     const database = client.db("ECOMMERCE");
//     const collection = database.collection("products");

//     const doc = { name: "John Doe", age: 30, address: "123 Main St" };
//     const result = await collection.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }

// createDocument().catch(console.dir);





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function createDocument() {
  try {
    await client.connect();
    const database = client.db("ECOMMERCE");
    const collection = database.collection("users");

    const doc = { name: "John Doe", age: 30, address: "123 Main St" };
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

createDocument().catch(console.dir);
