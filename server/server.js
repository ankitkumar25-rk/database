// import http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!\n");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

import express from "express";

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
  ]);
});

app.post("/create-user", (req, res) => {
  // res.send("User created successfully"); // comment kr ke dekh
  console.log(req.body);
  res.send({
    message: `User created successfully with name: ${req.body.name} and email: ${req.body.email}`,
  });
  //   console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
