import React, { useContext, useEffect, useState } from "react";

import { PreferencesContext } from "../context/PreferencesContext";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Title from "./Title";
import Paragraph from "./Paragraph";
import Schedule from "./Schedule";

import { IconButton } from "@material-ui/core";

import { generateHorarios } from "../utils/generateHorarios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: 35,
    height: 35,
    borderRadius: 30,
    background: "red",
    marginTop: 15,
  },
  headers: {
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  index: {
    padding: "8px",
    borderBottom: "2px solid transparent",
    transition: "all .2s",
    "&:hover": {
      cursor: "pointer",
    },
  },
  indexSelected: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const STEP_SIZE = 10;
const DisplaySchedule = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(PreferencesContext);
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [range, setRange] = useState(0);

  useEffect(() => {
    const options = generateHorarios(state.materias, state);
    setOptions(options);
    console.log("OPCIONES", options);
  }, [state]);

  const handleIndexClick = (index) => {
    setIndex(index);
  };
  const headers = options.map((_, i) => {
    if (i < range || i >= range + STEP_SIZE) return null;
    return (
      <span
        onClick={() => handleIndexClick(i)}
        className={clsx(classes.index, i === index && classes.indexSelected)}
      >
        {i + 1}
      </span>
    );
  });

  const horario =
    options.length > 0 ? <Schedule options={options[index]} /> : null;

  const handleLeft = () => {
    setRange(range - STEP_SIZE);
    setIndex(range - STEP_SIZE);
  };
  const handleRight = () => {
    setRange(range + STEP_SIZE);
    setIndex(range + STEP_SIZE);
  };

  console.log(range + STEP_SIZE, options.length);

  return (
    <div className={classes.root} id="3">
      <Title>Horarios</Title>
      <Paragraph>Elige tu opción favorita</Paragraph>
      <div className={classes.headers}>
        <IconButton
          onClick={handleLeft}
          disabled={range === 0}
          aria-label="delete"
          color="primary"
          size="small"
        >
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>
        {headers}
        <IconButton
          onClick={handleRight}
          disabled={range + STEP_SIZE >= options.length}
          aria-label="delete"
          color="primary"
          size="small"
        >
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={classes.container}>{horario}</div>
    </div>
  );
};

export default DisplaySchedule;
// yo no soy
