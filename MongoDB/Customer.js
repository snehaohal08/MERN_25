// Create customer which having fields : cno, review,raitings, location 
// A) insert 20 records 
import { MongoClient } from "mongodb";
db.Customer.insertMany([{"cid":1,"review":"Bad","rating":3,"location":"pune"},{"cid":2,"review":"Good","rating":3,"location":"Mumbai"},{"cid":3,"review":"Bad","rating":3,"location":"pune"}])
// display cid of rating below 3 
db.Customer.aggregate([{$match:{rating:{$lt:3}}},{$project:{cid:1}}])

//  Display records from location pune 
db.Customer.find({"location":"Pune"})

// Display first five records 
db.Customer.find().limit(5)

//  display no of customer from Mumbai location
db.Customer.count({"location":"Mumbai"})

// $project
db.Customer.aggregate([{$project:{cid:1,location:1}}])

// find negative reviews which content the word *bad early unsupportive*
db.Customer.find({review:{$in:["Bad","early","unsupportive"]}})

// ******************OR******************
db.Customer.find({review:{$in:[/bad/i,/early/i,/unsupportive/i]}})
// i → Case-insensitive flag
// Matlab: capital ya small letter ka farak nahi padega

// "Bad", "BAD", "bAd" → sab match karega



