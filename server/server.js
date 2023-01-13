import express from "express";
import fs from "fs";

const app = express();

//route middleware

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

app.listen(5000, () => console.log("server running on port 5000"));
