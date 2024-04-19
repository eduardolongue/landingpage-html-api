const express = require("express");
const dotenv = require("dotenv").config();
const taskrouter = require("./routes/taskRouter");

const app = express();

app.set("port", process.env.PORT || 3000);

const cors = require("cors");
app.use(express.json());
app.use(cors())

app.use("/api", taskrouter);

module.exports = app;