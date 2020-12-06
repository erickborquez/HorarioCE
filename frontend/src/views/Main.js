import React, { useState } from "react";

import StyledSelect from "../components/StyledSelect";
import { makeStyles } from "@material-ui/core";
import backgroundLogo from "../assets/images/background.svg"
import Landing from "./Landing"
import Preferences from "../views/Preferences"

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "green",
    backgroundImage: `url('${backgroundLogo}')`, 
    height: "2000%",
  },
}));
const weyes = [
  { value: "yona1", label: "YonatánYonatánYonatánYonatánYonatánYonatán 1" },
  { value: "yona2", label: "YonatánYonatánYonatánYonatánYonatánYonatán 2" },
  { value: "yona3", label: "YonatánYonatánYonatánYonatánYonatánYonatán 3" },
  { value: "yona4", label: "YonatánYonatánYonatánYonatánYonatánYonatán 4" },
  { value: "yona5", label: "YonatánYonatánYonatánYonatánYonatánYonatán 5" },
];


const Main = () => {
  return (
    <div>
    </div>
  )
}

export default Main

