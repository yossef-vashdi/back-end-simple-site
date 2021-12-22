const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const serverReplies = require("./functions/randomServerResponse");

app.get("/", (req, res) => {
  console.log(req);
  res.status(202).send(serverReplies());
});

app.listen(port, () => {
  console.log(`listening on port ${port} ...   `);
});
