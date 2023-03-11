import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";

import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

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

//middleware
app.use(express.json());

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);


app.listen(8080, () => {
  console.log("connected to backend!");
});
