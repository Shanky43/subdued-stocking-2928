const express = require("express");
const app = express();
const connection = require("./db");

const { auth } = require("./middleware/auth.middleware");

const { medRouter } = require("./Routes/med.route");
const cors = require("cors");
require("dotenv").config();

//Import userRouter
const { userRouter } = require("./Routes/user.router");
const { CartRouter } = require("./Routes/cart.router");
const { OrderRouter } = require("./Routes/order.route");

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Home page");
// });

app.use("/", medRouter);

//By neeraj ==>
app.use("/users", userRouter);
app.use("/cart", auth, CartRouter);
app.use("/order", auth, OrderRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Port 8080 is running");
  } catch (err) {
    console.log("cannot connect to the db");
  }
});
