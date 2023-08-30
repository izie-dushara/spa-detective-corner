const express = require("express");
const path = require("path");

const app = express();

// static resources middleware
app.use("/static", express.static(path.resolve(__dirname, "client", "static")));
// get client
app.get("*/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});
// establish server connection
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port: 3000");
});
