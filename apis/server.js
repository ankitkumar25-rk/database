import express from "express";
import mongoose from "mongoose";

const app = express();

// // clean way  use just await
// const connectionInstance = await mongoose.connect(
//   "mongodb+srv://ankitgia336_db_user:bEjplgPzczczxczcccXzGYeNyQc@tut.w2344fn.mongodb.net/",
// );
// console.log(connectionInstance.connection.host);

// better approach
(async () => {
  const url =
    "mongodb+srv://ankitgia336_db_user:bEjplgPXzGYeNyQc@tut.w2344fn.mongodb.net/?appName=tut";
  const connectionInstance = await mongoose.connect(url);
  console.log(connectionInstance.connection.host);
})();

// collection--- model ---  user

const userCollection = mongoose.model("User", userSchema);

//middleware
app.use(express.json());

// data definition
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

// create api
app.post("/create-user", async (req, res) => {
  //   console.log(req.body);
  const userData = req.body;
  const createdUser = await userCollection.create(userData);
  res.send({
    createdUser: createdUser,
  });
});

app.get("/", async (req, res) => {
  res.send("server running");
});

// read all api
app.get("/get-all-users", async (req, res) => {
  const users = await userCollection.find();
  res.send(users);
});

// get single user api
app.get("/get-single-user", async (req, res) => {
  const user = await userCollection.findOne();
  res.send(user);
});

// get single user api by name
app.get("/get-single-username", async (req, res) => {
  //   const user = await userCollection.findOne(req.body);
  const user = await userCollection.findOne({ name: req.body.name });
  res.send(user);
});

// update single user
app.put("/update-user", async (req, res) => {
  //   console.log(req.query);
  const updatedUser = await userCollection.findByIdAndUpdate(
    req.query.id,
    req.body,
    { returnDocument: "after" },
  );
  res.send({ updatedUser: updatedUser });
});

app.delete("/delete-user", async (req, res) => {
  const deletedUser = await userCollection.findByIdAndDelete(req.query.id);
  res.send({ deletedUser: deletedUser });
});

app.listen(8000, () => {
  console.log("server running on http://localhost:8000");
});
