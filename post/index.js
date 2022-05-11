const express = require("express");
const axios = require("axios");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello to the post service`);
});

app.post("/createPost", (req, res) => {
  const data = {
    postId: Math.floor(Math.random() * Date.now()),
    title: req.body.title,
    comments: [],
  };

  axios.post("http://event-bus-svc:4000/postCreated", data);

  return res.status(200).json({
    message: "post created",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} for post service`);
});
