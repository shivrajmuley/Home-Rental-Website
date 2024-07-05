const mongoose = require("mongoose");

const HomeListing = mongoose.Schema(
  {
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
      required: false,
    },
    aptSuite: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    guestCount: {
      type: Number,
      required: false,
    },
    bedroomCount: {
      type: Number,
      required: false,
    },
    bedCount: {
      type: Number,
      required: false,
    },
    bathroomCount: {
      type: Number,
      required: false,
    },
    amenities: {
      type: Array,
      default: [],
    },
    amenitiesIcon: {
      type: Array,
      default: [],
    },
    listingPhotoPaths: [{ type: String }], // Store photo URLs
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    highlight: {
      type: String,
      required: false,
    },
    highlightDesc: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
  },

  { timestamps: false }
);
module.exports = mongoose.model("HomeListing", HomeListing);
