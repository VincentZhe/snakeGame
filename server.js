const express = require("express");
const app = express();
var path = require("path");

app.use(express.json());

app.use("/static", express.static("./static/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/snake.html"));
});

app.listen(8080, () => {
  console.log("Backend server is running");
});
