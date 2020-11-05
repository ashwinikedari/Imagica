const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://Ashwini_Kedari:Ashwini123@imagica_mongo:27017/imagica?retryWrites=true&w=majority"
    // "mongodb://imagica_mongo:27017/imagica"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
     console.log("Connection failed!",error);
  });