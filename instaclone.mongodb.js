show("dbs");

use("instaclone");

show("collections");

db.createCollection("users");
db.createCollection("posts");

show("collections");

// db.users.insertOne({
//   name: "Ankit",
//   email: "Ankitgia@gmail.com",
//   city: "jhunjhunu",
//   age: 19,
// });

// db.posts.insertOne({
//   title: "My First Post",
//   content: "This is my first post on Instaclone!",
//   userId: db.users.findOne({ name: "Ankit" })._id,
// });

db.posts.updateOne(
  { title: "My First Post" },
  { $set: { content: "This is my updated first post on Instaclone!" } },
);

db.posts.find();
// db.users.find();
