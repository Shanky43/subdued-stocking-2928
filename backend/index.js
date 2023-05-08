const express = require("express");
const app = express();
const connection = require("./db");

const { medRouter } = require("./Routes/med.route");
const cors = require("cors");
require("dotenv").config();

//Import userRouter
const { userRouter } = require("./Routes/user.router");

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Home page");
// });

app.use("/products", medRouter);

//By neeraj ==> for register,login
app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Port 8080 is running");
  } catch (err) {
    console.log("cannot connect to the db");
  }
});
