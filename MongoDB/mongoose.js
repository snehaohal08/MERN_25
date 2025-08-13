// import mongoose from "mongoose";
// try {
//   await mongoose.connect("mongodb://localhost:27017/MARS");
// } catch (error) {
//   console.error(error);
//   process.exit();
// }

// // step 2 create the schemas

// const userSchemas = mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true, min: 5 },
//   email: { type: String, required: true, unique: true },
//   createdAt: { type: Date, default: Date.now() },
// });

// // step 3 create a model
// const Users = mongoose.model("user", userSchemas);

// // await Users.create({name:"sneha ohal", age:21,email:"sneha@gmail.com"});

// const userData = [
//   { name: "Mosin", age: 21, email: "mosin@gmail.com" },
//   { name: "Rahul", age: 23, email: "rahul@gmail.com" },
//   { name: "Akshata", age: 22, email: "akshata@gmail.com" },
// ];
// // step 4 insertmany doc
// // await Users.insertMany(userData)

// // step 5 Read data
// // const user = await Users.find();
// // const user = await Users.find({ age: { $gt: 21 } });
// // console.log(user);

// // step 6 Update
// // const updateuser = await Users.updateOne({ email: "mosin@gmail.com" }, { name: "mosin balsing" });
// const updateuser = await Users.updateOne(
//   { email: "mosin@gmail.com" },
//   //   { $set: { age: 22} }
//   { $inc: { age: 2 } }
// );
// console.log(updateuser);
// await mongoose.connection.close();

// ****************************************************  Fatch API  ******************************************************************** 
// server.js
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// Step 1: Connect to MongoDB
await mongoose.connect("mongodb://localhost:27017/MARS");
console.log("Connected to MongoDB");

// Step 2: Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 5 },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Step 3: Model
const Users = mongoose.model("User", userSchema);

// Step 4: API to fetch data
app.get("/users", async (req, res) => {
  try {
    const users = await Users.find(); // Fetch from MongoDB
    res.json(users); // Send as JSON
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Step 5: Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
