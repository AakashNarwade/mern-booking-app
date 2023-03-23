import Hotel from "../models/Hotel.js";

//createHotel
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
    // res.status(500).json(error);
  }
};

//updateHotel
export const updateHotel = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
    // res.status(500).json(error);
  }
};

//deleteHotel

export const deleteHotel = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    res.status(200).json(deletedHotel);
    res.status(200).json("hotel is deleted");
  } catch (error) {
    next(error);
  }
};

//get single Hotels

export const getHotel = async (req, res, next) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//getAll hotels
export const getAllHotels = async (req, res, next) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
    next(error);
  }
};


//get hotels by city
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    // const allHotels = await Hotel.find();
    const list = await Promise.all((cities).map(city=>{
      return Hotel.countDocuments({city:city});
    }))

    res.status(200).json(list);
  } catch (error) {
    next(error);
    next(error);
  }
};
