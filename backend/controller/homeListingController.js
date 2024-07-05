const HomeListing = require("../models/HomeListing");

const listing = async (req, res) => {
  const {
    category,
    type,
    streetAddress,
    aptSuite,
    city,
    province,
    country,
    guestCount,
    bedCount,
    bathroomCount,
    bedroomCount,
    amenities,
    amenitiesIcon,
    title,
    listingPhotoPaths,
    description,
    highlight,
    highlightDesc,
    price,
  } = req.body;
  try {
    const result = await HomeListing.create({
      category: category,
      type: type,
      streetAddress: streetAddress,
      aptSuite: aptSuite,
      city: city,
      province: province,
      country: country,
      guestCount: guestCount,
      bedCount: bedCount,
      bathroomCount: bathroomCount,
      bedroomCount: bedroomCount,
      amenities: amenities,
      amenitiesIcon:amenitiesIcon,
      title: title,
      listingPhotoPaths: listingPhotoPaths,
      description: description,
      highlight: highlight,
      highlightDesc: highlightDesc,
      price: price,
    });

    res.status(200).json({ listing: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
module.exports = listing;
