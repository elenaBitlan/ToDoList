const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Task = require("./models/task");
const taskRoutes = require("./routes/tasks");
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  next();
});

mongoose.connect("mongodb://localhost:27017/hellen")
  .then(() => {
    console.log(" succes");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.use("/task", taskRoutes);

const server = http.createServer(app);
server.listen(port);
