import express from "express";
import { readdirSync } from "fs";

const app = express();

//route middleware

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.listen(4000, () => console.log("server running on port 4000"));
