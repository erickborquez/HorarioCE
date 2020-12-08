import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Schedule from "./Schedule";
import Title from "./Title";
import Paragraph from "./Paragraph";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
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
}));

export const DisplaySchedule = ({ options }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="3">
      <Title>Horarios</Title>
      <Paragraph>Elige tu opción favorita</Paragraph>
      {options.map((schedule, index) => (
        <div className={classes.container} key={index + 1}>
          <div className={classes.number}>{index + 1}</div>
          <Schedule options={schedule} />
        </div>
      ))}
    </div>
  );
};
