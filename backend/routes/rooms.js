import express from "express";
import {
  allRooms,
  createRoom,
  deleteRoom,
  getRoom,
  updateRoom,
} from "../controllers/roomsController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyUser, updateRoom);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//get all
router.get("/", allRooms);

//get single

router.get("/:id", getRoom);

export default router;
