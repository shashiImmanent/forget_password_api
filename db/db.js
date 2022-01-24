const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dbapi").then((data)=>{
    console.log("Server is connected with db");
}).catch((err)=>{
    console.log("no connection");
});