import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    res.status(200).json(deletedHotel);
    res.status(200).json("hotel is deletd");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getAll

router.get("/", async (req, res, next) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
    res.status(500).json(error);
  }
});

export default router;
