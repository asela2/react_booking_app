import express from "express";
import { readdirSync } from "fs";
const morgan = require("morgan");
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();

//database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//route middleware

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`servers running on port ${PORT}`));
