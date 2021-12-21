const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log(req);
  res.status(202).send("hi !!! from server !!!");
});

app.listen(port, () => {
  console.log(`listening on port ${port} ...   `);
});
