const mongoose = require("mongoose");

mongoose
  .connect(
    //"mongodb+srv://<USERNAME>:<PASSOWORD>@<HOSTNAME>/imagica?retryWrites=true&w=majority"
    "mongodb://127.0.0.1:27017/imagica"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
     console.log("Connection failed!",error);
  });