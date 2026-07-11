// use("ecommerce");

// show("collections");

// ObjectID();

// _id --> represented as hexadecimal string of 24 characters, 1 byte = 2 hexadecimal characters, 12 bytes = 24 characters

// first 4 bytes = timestamp, next 3 bytes = machine identifier, next 2 bytes = process id, last 3 bytes = counter

db;

use("shopApp");

show("dbs");

db.createCollection("users");

show("collections");

// db.users.insertOne({
//   name: "Ankit",
//   email: "Ankitgiaa@gmail.com",
//   city: "jhunjhunu",
//   age: 19,
// });

// db.users.insertOne({
//   name: "Manisha",
//   email: "Manisha123@gmail.com",
//   city: "jhunjhunu",
//   age: 5,
// });

// show("users");

// db.users.insertMany([
//   {
//     name: "Monika",
//     email: "Monika123@gmail.com",
//     city: "jhunjhunu",
//     age: 19,
//   },
//   {
//     name: "Kanchan",
//     email: "Kanchan123@gmail.com",
//     city: "jhunjhunu",
//     age: 5,
//   },
//   {
//     name: "Rohit",
//     email: "Rohit123@gmail.com",
//     city: "jhunjhunu",
//     age: 25,
//   },
// ]);

// db.users.find({ age: { $gt: 18 } }).pretty();
// db.users.find({ age: { $lt: 20 } }).pretty();
// db.users.find({ age: 19 }).pretty();
// db.users.find({ age: { $gte: 18, $lte: 20 } }).pretty();
// db.users.find({ age: { $in: [5, 19] } }).pretty();

// ecommerce database

use("ecommerce");

show("dbs");

db.createCollection("products");

show("collections");

// db.products.insertMany([
//   {
//     name: "Iphone 14",
//     price: 120000,
//     category: "mobile",
//     stock: 10,
//   },
//   {
//     name: "Laptop",
//     price: 90000,
//     category: "electronics",
//     stock: 7,
//   },
//   {
//     name: "Headphones",
//     price: 2000,
//     category: "electronics",
//     stock: 5,
//   },
//   {
//     name: "Shoes",
//     price: 3000,
//     category: "fashion",
//     stock: 15,
//   },
// ]);

// db.products.find();

// db.products.countDocuments({ category: "electronics" });
db.products.countDocuments();
