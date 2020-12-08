import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    borderRadius: "10px",
    border: "5px solid black",
    maxHeight: "1000px",
    background: "linear-gradient(180deg,#8360c3 -100%, #2ebf91 100%)",
    width: "100%",
    marginBottom: 32,
    marginTop: 10,
  },
  gridItem: {
    boxSizing: "border-box",
    border: `1px solid black`,
    padding: "5px",
    fontSize: "15px",
    fontWeight: 600,
    textAlign: "center",
    color: "white",
  },
}));

const GridStyle = ({ options }) => {
  const data = {};
  const classes = useStyles();
  options.forEach((option) => {
    let dates = option.dates;
    dates.forEach((date) => {
      let start = Number(date.start);
      let end = Number(date.end);
      let letter = date.day[0];
      if (date.day === "MIERCOLES") letter = "I";
      data[letter + String(start)] = option.name;
      if (end - start === 155 || end - start === 355)
        data[letter + String(start + 100)] = option.name;
    });
  });

  const days = ["H", "L", "M", "I", "J", "V", "S"];
  const hours = [];
  const subjects = [];
  for (let i = 7; i < 22; ++i) hours.push(`${i}00`);

  let i = 7;
  hours.forEach((hour) => {
    days.forEach((day) => {
      const subject = {};
      subject["code"] = day + hour;
      if (day === "H") {
        subject["name"] = `${i}:00`;
        ++i;
      } else if (data[day + hour]) subject["name"] = data[day + hour];
      else subject["name"] = "";
      subjects.push(subject);
    });
  });

  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridItem}></div>
      <div className={classes.gridItem}>LUNES</div>
      <div className={classes.gridItem}>MARTES</div>
      <div className={classes.gridItem}>MIERCOLES</div>
      <div className={classes.gridItem}>JUEVES</div>
      <div className={classes.gridItem}>VIERNES</div>
      <div className={classes.gridItem}>SABADO</div>
      {subjects.map((sub) => (
        <div className={classes.gridItem} key={sub.code}>
          {sub.name}
        </div>
      ))}
    </div>
  );
};
export default GridStyle;
