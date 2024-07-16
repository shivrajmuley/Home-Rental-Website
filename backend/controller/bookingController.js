const Booking = require("../models/Booking");

const booking = async (req, res) => {
  const { startDate, endDate, totalPrice, listingId, customerId } = req.body;
  try {
    const newBooking = new Booking({
      customerId,
      listingId,
      startDate,
      endDate,
      totalPrice,
    });
    await newBooking.save();

    res.status(200).json({ booking: newBooking });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
module.exports = booking;
