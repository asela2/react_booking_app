import express from "express";
import router from "./routes/auth";

const app = express();

//route middleware
app.use("/api", router);

app.listen(5000, () => console.log("server running on port 8000"));
