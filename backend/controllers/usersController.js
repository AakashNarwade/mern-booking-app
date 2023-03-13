import User from "../models/User.js";

//updateUser
export const updateUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
    // res.status(500).json(error);
  }
};

//deleteUser

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json(deletedUser);
    res.status(200).json("User is deletd");
  } catch (error) {
    next(error);
  }
};

//get single Users

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//getAll Users
export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
    next(error);
  }
};
