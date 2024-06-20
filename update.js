// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function updateDocument() {
//   try {
//     await client.connect();
//     const database = client.db("ECOMMERCE");
//     const collection = database.collection("products");

//     const query = { name: "John Doe" };
//     const update = { $set: { age: 31 } };
//     const result = await collection.updateOne(query, update);
//     console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
//   } finally {
//     await client.close();
//   }
// }

// updateDocument().catch(console.dir);



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function updateDocument() {
//   try {
//     await client.connect();
//     const database = client.db("ECOMMERCE");
//     const collection = database.collection("products");

//     const query = { name: "John Doe" };
//     const update = { $set: { age: 31 } };
//     const result = await collection.updateOne(query, update);
//     console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
//   } finally {
//     await client.close();
//   }
// }

// updateDocument().catch(console.dir);





// users   ......

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://YVESBOBODEV:MyEcommerceweb@cluster0.bme1f5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function updateDocument() {
  try {
    await client.connect();
    const database = client.db("ECOMMERCE");
    const collection = database.collection("users");

    const query = { name: "John Doe" };
    const update = { $set: { age: 31 } };
    const result = await collection.updateOne(query, update);
    console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
  } finally {
    await client.close();
  }
}

updateDocument().catch(console.dir);
