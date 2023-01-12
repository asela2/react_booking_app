const express = require("express");

const app = express();

app.get("/api/:message", (req, res) => {
  res.status(200).send(req.params.message);
});

app.listen(5000, () => console.log("server running on port 8000"));
