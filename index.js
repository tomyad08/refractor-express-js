const express = require("express");
const router = require("./routes/index");

const port = 3000;

const app = express();
app.use(router);

app.get("/", (req, res) => {
  res.json({ id: "1" });
  //   res.send("hallo ini adalah express nodemon");
});

app.listen(port, console.log("sedang berjalan"));
