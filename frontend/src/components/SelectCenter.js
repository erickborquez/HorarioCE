import { makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useContext } from "react";

import { PreferencesContext } from "../context/PreferencesContext";

import Paragraph from "./Paragraph";
import Title from "./Title";

import { labels as centros } from "../shared/centros.json";

const useStyles = makeStyles((theme) => ({
  root: {},
  select: {
    marginTop: 32,
    width: 200,
    fontSize: 22,
    fontWeight: 600,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
  },
}));
const SelectCenter = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(PreferencesContext);

  const handleChange = (e) => {
    dispatch({ type: "center", value: e.target.value });
  };

  return (
    <div className={classes.root} id="1">
      <Title>Centro Académico</Title>
      <Paragraph>Elige un centro académico de la siguiente lista</Paragraph>
      <Select
        disabled={state.section !== 1}
        size="small"
        className={classes.select}
        variant="outlined"
        onChange={handleChange}
        value={state.center}
      >
        {centros.map((centro) => (
          <MenuItem value={centro} key={centro}>
            {centro}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCenter;
