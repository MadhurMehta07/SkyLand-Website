const mongoose = require("mongoose");

const uri =
  "mongodb+srv://sachinverma09:Deadpool.1@cluster0.suv7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/linkeeper";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

module.exports;
