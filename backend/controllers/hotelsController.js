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
  let hotel;

  try {
    // if (id.match(/^[0-9a-fA-F]{24}$/)) {
    //   hotel = await Hotel.findById(id);
    // }
    hotel = await Hotel.findById(id);

    res.status(200).json(hotel);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//getAll hotels
export const getAllHotels = async (req, res, next) => {
  console.log("req=>query>limit=> ", req.query.limit);
  const { min, max, limit, ...others } = req.query;
  try {
    const allHotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
    }).limit(req.query.limit);
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
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(error);
    next(error);
  }
};

//get hotels by type
export const countByType = async (req, res, next) => {
  // const cities = req.query.cities.split(",");

  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};