import express from "express";
import {
  allHotels,
  createHotel,
  deleteHotel,
  singleHotel,
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
router.get("/:id", singleHotel);

//getAll

router.get("/", allHotels);

export default router;
