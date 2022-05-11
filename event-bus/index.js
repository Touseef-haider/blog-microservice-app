const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let posts = [];

app.get("/", (req, res) => {
  res.status(200).json(posts);
});

app.post("/postCreated", (req, res) => {
  posts.push(req.body);
});

app.post("/commentCreated", (req, res) => {
  let post = posts.find((p) => p?.postId === req.body?.postId);
  if (post) {
    post?.comments.push(req.body.comment);
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} for event bus service`);
});
