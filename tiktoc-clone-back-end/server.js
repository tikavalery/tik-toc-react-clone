import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Video from "./dbModel.js";

const app = express();
const port = process.env.PORT || 9000;
// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});
//Db config
const connection_url =
  "mongodb+srv://admin:AvSCrDI5Snuwyu2Q@cluster0.xajmu.mongodb.net/tiktoc>?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//API endpoint
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Video.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Video.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.listen(port, () => console.log(`listening on localhost:${port}`));

// Username and password

//username : admin

//password : AvSCrDI5Snuwyu2Q
// databasename : tiktoc
