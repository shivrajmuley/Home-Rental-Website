const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    customerId:{ type : String},
    listingId: [],
    startDate: {
      type: String,
      required:true,
    },
    endDate: {
      type: String,
      required:true,
    },
    totalPrice: {
      type: Number,
      required:true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", BookingSchema);
