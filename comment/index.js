const express = require("express");

const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello to the comment service`);
});

app.post("createComment", (req, res) => {
  let data = {
    ...comment,
    commentId: Math.floor(Math.random() * Date.now()),
    postId: req.body.postId,
    comment: req.body.comment,
  };

  axios.post("http://event-bus-src:4000/commentCreated", data);

  return res.status(200).json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} for comment service`);
});
