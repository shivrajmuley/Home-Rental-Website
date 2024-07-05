import React, { useEffect, useState } from "react";

import * as AiReactIcons from "react-icons/ai"; // ai for Ant Design Icons
// do the same thingg for bootstrap icons.
import * as BiReactIcons from "react-icons/bi";
import * as GiReactIcons from "react-icons/gi";
import * as PiReactIcons from "react-icons/pi";
import * as FaReactIcons from "react-icons/fa";
import * as MdReactIcons from "react-icons/md";
import * as BsReactIcons from "react-icons/bs";
import * as TbReactIcons from "react-icons/tb";
import * as Fa6ReactIcons from "react-icons/fa6";

import axios from "axios";
import { useParams } from "react-router-dom";

const DynamicIcons = () => {
  /**
   *
   * @param {string} iconName
   * @returns
   */

  const DisplayIcons = (iconName) => {
    if (iconName.startsWith("Ai")) {
      return AiReactIcons[iconName];
    }
    if (iconName.startsWith("Bs")) {
      return BsReactIcons[iconName];
    }
    if (iconName.startsWith("Bi")) {
      return BiReactIcons[iconName];
    }
    if (iconName.startsWith("Tb")) {
      return TbReactIcons[iconName];
    }
    if (iconName.startsWith("Md")) {
      return MdReactIcons[iconName];
    }
    if (iconName.startsWith("Pi")) {
      return PiReactIcons[iconName];
    }
    if (iconName.startsWith("Fa")) {
      return FaReactIcons[iconName];
    }
    if (iconName.startsWith("Gi")) {
      return GiReactIcons[iconName];
    }
    if (iconName.startsWith("Fa")) {
      return FaReactIcons[iconName];
    }
  };

  let [icons, setIcons] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8800/properties/${params.id}`)
      .then((response) => setIcons(response.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(icons);
  return (
    <div>
   
      <div
        style={{
          fontSize: "32px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        {icons.amenitiesIcon
          ? icons.amenitiesIcon.map((iconNames) =>
              React.createElement(DisplayIcons(iconNames))
            )
          : ""}
      </div>
    </div>
  );
};
export default DynamicIcons;
