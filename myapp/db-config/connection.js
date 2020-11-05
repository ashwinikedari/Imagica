const mongoose = require("mongoose");

mongoose
  .connect(
    //"mongodb+srv://<USERNAME>:<PASSOWORD>@<HOSTNAME>/imagica?retryWrites=true&w=majority"
    "mongodb://imagica_mongo:27017/imagica"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
     console.log("Connection failed!",error);
  });