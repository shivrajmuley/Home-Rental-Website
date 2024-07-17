const mongoose = require("mongoose");

let HomeListing = mongoose.Schema(
  {
    
    creator: [],
    category: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    aptSuite: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    bedroomCount: {
      type: Number,
      required: true,
    },
    bedCount: {
      type: Number,
      required: true,
    },
    bathroomCount: {
      type: Number,
      required: true,
    },

    amenitiesIcon: {
      type: Array,
      default: [],
    },
    listingPhotoPaths: [{ type: String }], // Store photo URLs
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
      required: true,
    },
    highlightDesc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  { timestamps: false }
);
module.exports = mongoose.model("HomeListing", HomeListing);
