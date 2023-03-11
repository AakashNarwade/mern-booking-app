import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected successfully ");
  })
  .catch((e) => {
    console.log("error occures in connecting db -> ", e);
  });
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected  ");
});

//middlewares
app.use("/api/auth", authRoute);

app.listen(8080, () => {
  console.log("connected to backend!");
});
