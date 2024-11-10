import express from "express";
import http from "http";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyparser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

const MONGO_URL =
  "mongodb+srv://sidneyaulakh:sidneyaulakh@cluster0.z1pzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => console.log(error));

app.use("/", router());

console.log("Hello, Sid!");
