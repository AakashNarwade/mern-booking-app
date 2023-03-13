import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelsController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", createHotel);

//update

router.put("/:id", updateHotel);

//delete

router.delete("/:id", deleteHotel);

//get
router.get("/:id", getHotel);

//getAll

router.get("/", getAllHotels);

export default router;
