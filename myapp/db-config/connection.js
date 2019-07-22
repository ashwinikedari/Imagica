const mongoose = require("mongoose");

mongoose
  .connect(
    //"mongodb+srv://m220student:m220password@mflix-vizvg.mongodb.net/imagica?retryWrites=true&w=majority"
    "mongodb://127.0.0.1:27017/imagica"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
     console.log("Connection failed!",error);
  });