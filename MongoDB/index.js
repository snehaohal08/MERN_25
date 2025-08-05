import { MongoClient } from "mongodb";
// 1.using this mongodb://localhost:27017/ we can connect the nodejs to mongo db
const client = new MongoClient("mongodb://localhost:27017/");
await client.connect();
console.log("Database connected successfully");

//2. database created at name mongo_nodejs_db
const db = client.db("mongo_nodejs_db");

// 3.collection created at name users
const userCollection = db.collection("users");
// 4. perform CRUD operations
// try {
//   userCollection.insertOne({
//     name: "kachor ohal",
//     email: "kachor@gmail.com",
//     age: 48,
//   });
//   console.log("Document inserted successfully");
// } catch (error) {
//   console.log("Error inserting document:", error);
// }

// userCollection.insertMany([
//     {
//         name: "sneha ohal",
//         email: "snehaohal@gmail.com"
//     },
//     {
//         name: "mosin",
//         email: "snehaohal@gmail.com"
//     },
//     {
//         name: "hrushi",
//         email: "snehaohal@gmail.com"
//     }
// ]);
// userCollection.updateOne(
//     {name: "yash"},
//     {$set: {email: "yash@gmail.com"}}
// );

// try {
//     userCollection.deleteMany({});
//     console.log("All documents deleted successfully");
// } catch (error) {
//     console.log("error to delete the records");
// }

const data = await userCollection.find().toArray();
if (data) {
  console.log("✅ Records:");
  console.log(data);
}
else {
  console.log("No records found");
}
