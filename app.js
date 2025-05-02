const express = require("express");
const app = express();
const path = require("node:path")

const indexRouter = require("./routers/indexRouter")
const newMessageRouter = require("./routers/newMessageRouter")


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");






const PORT = 3000;
app.listen(PORT,()=> console.log("listening"))
