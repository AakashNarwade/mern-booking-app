import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

//create room
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

//update room
export const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

//delete room
export const deleteRoom = async (req, res, next) => {
  const { id } = req;

  try {
    const deletedRoom = await Room.findByIdAndDelete(id);
    res.status(200).json(deletedRoom);
    res.status(200).json("room is deleted");
  } catch (err) {
    next(err);
  }
};

//get single room
export const getRoom = async (req, res, next) => {
  const { id } = req;
  try {
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//get all rooms
export const allRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
