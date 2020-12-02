import React, { useState } from "react";

import StyledSelect from "../components/StyledSelect";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "green",
    height: 2000,
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
  const classes = useStyles();
  const [selected, setSelected] = useState(null);

  const handleWeyesChange = (event, value) => {
    setSelected(value.props.value);
  };
  return (
    <div className={classes.root}>
      <div style={{ width: "50%" }}>
        <StyledSelect
          options={weyes}
          value={selected}
          handleChange={handleWeyesChange}
          nullInitialValue
        />
      </div>
    </div>
  );
};

export default Main;
