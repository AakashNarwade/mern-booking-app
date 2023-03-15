import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/UsersController.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//check authenticated user
// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("user is logged in ");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello authenticated user you can delete user account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   console.log("hhhhhhhhhhhh");
//   res.send("hello admin you can delete all users account");
// });

//update

router.put("/:id", verifyUser, updateUser);

//delete

router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//getAll

router.get("/", verifyAdmin, getAllUsers);

export default router;
