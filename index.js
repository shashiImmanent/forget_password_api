const dotenv = require("dotenv").config();
require("./db/db");
const users = require("./routes/users")
const passwordReset = require("./routes/passwordReset");
const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json())

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

app.listen(port,()=>{
    console.log(`Server running on the ${port}`)
})