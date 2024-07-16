import {
  GiPalmTree,
  GiBoatFishing,
  GiMountainCave,
  GiCampingTent,
} from "react-icons/gi";
import { TfiMoney } from "react-icons/tfi";
import { BiSolidCastle } from "react-icons/bi";
import { TbToolsKitchen } from "react-icons/tb";
import {
  PiWindmillDuotone,
  PiMountainsFill,
  PiSnowflakeBold,
  PiCactusFill,
  PiBarnFill,
} from "react-icons/pi";
import { FaPersonSkiing } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { BiSolidDoorOpen } from "react-icons/bi";

import {
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaKey,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
} from "react-icons/bi";
import { BsSnow, BsPersonWorkspace } from "react-icons/bs";

import { MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    Icon: FaEarthAfrica,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Beachfront",
    Icon: GiPalmTree,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Windmills",
    Icon: PiWindmillDuotone,
    description: "This property is has windmills!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Iconic cities",
    Icon: PiMountainsFill,
    description: "This property is modern!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Countryside",
    Icon: BsBuildingsFill,
    description: "This property is in the countryside!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Amazing Pools",
    Icon: FaUmbrellaBeach,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Islands",
    Icon: FaSwimmingPool,
    description: "This property is on an island!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Lakefront",
    Icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Ski-in/out",
    Icon: FaPersonSkiing,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Castles",
    Icon: GiMountainCave,
    description: "This property is an ancient castle!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Caves",
    Icon: BiSolidCastle,
    description: "This property is in a spooky cave!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Camping",
    Icon: GiCampingTent,
    description: "This property offers camping activities!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Arctic",
    Icon: PiSnowflakeBold,
    description: "This property is in arctic environment!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Desert",
    Icon: PiCactusFill,
    description: "This property is in the desert!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Barns",
    Icon: PiBarnFill,
    description: "This property is in a barn!",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Luxury",
    Icon: TfiMoney,
    description: "This property is brand new and luxurious!",
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    Icon: IoHome,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    Icon: BiSolidDoorOpen,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    Icon: MdGroups2,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    Icon: PiBathtubFill,
  },
  {
    name: "Personal care products",
    Icon: FaPumpSoap,
  },
  {
    name: "Outdoor shower",
    Icon: FaShower,
  },
  {
    name: "Washer",
    Icon: BiSolidWasher,
  },
  {
    name: "Dryer",
    Icon: BiSolidDryer,
  },
  {
    name: "Hangers",
    Icon: PiCoatHangerFill,
  },
  {
    name: "Iron",
    Icon: TbIroning3,
  },
  {
    name: "TV",
    Icon: PiTelevisionFill,
  },
  {
    name: "Dedicated workspace",
    Icon: BsPersonWorkspace,
  },
  {
    name: "Air Conditioning",
    Icon: BsSnow,
  },
  {
    name: "Heating",
    Icon: GiHeatHaze,
  },
  {
    name: "Security cameras",
    Icon: GiCctvCamera,
  },
  {
    name: "Fire extinguisher",
    Icon: FaFireExtinguisher,
  },
  {
    name: "First Aid",
    Icon: BiSolidFirstAid,
  },
  {
    name: "Wifi",
    Icon: BiWifi,
  },
  {
    name: "Cooking set",
    Icon: TbToolsKitchen,
  },
  {
    name: "Refrigerator",
    Icon: BiSolidFridge,
  },
  {
    name: "Microwave",
    Icon: MdMicrowave,
  },
  {
    name: "Stove",
    Icon: GiToaster,
  },
  {
    name: "Barbecue grill",
    Icon: GiBarbecue,
  },
  {
    name: "Outdoor dining area",
    Icon: FaUmbrellaBeach,
  },
  {
    name: "Private patio or Balcony",
    Icon: MdBalcony,
  },
  {
    name: "Camp fire",
    Icon: GiCampfire,
  },
  {
    name: "Garden",
    Icon: MdYard,
  },
  {
    name: "Free parking",
    Icon: AiFillCar,
  },
  {
    name: "Self check-in",
    Icon: FaKey,
  },
  {
    name: " Pet allowed",
    Icon: MdPets,
  },
];
