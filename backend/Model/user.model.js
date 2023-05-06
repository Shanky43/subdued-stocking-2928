const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
},
{
  versionKey: false,
}
);

const userModel = model("users", userSchema);

module.exports = { userModel };
