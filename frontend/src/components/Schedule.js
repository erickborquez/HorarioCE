import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "100px repeat(6,1fr)",
    gridTemplateRows: "60px repeat(15, 1fr)",
    justifyItems: "stretch",
    alignItems: "stretch",
    borderRadius: "8px",
    // border: `2px solid ${theme.palette.primary.main}`,
    width: "100%",
    marginBottom: 32,
    marginTop: 10,
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "7px 4px",
    fontSize: 12,
    fontWeight: 500,
    textAlign: "center",
    color: "#333",
    // color: theme.palette.primary.main,
  },
  gridItemsHeader: {
    fontSize: 18,
    fontWeight: 600,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  gridItemDark: {
    background: "#f1f6f5",
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
      data[letter + String(start)] = option;
      if (end - start === 155 || end - start === 355)
        data[letter + String(start + 100)] = option;
    });
  });

  const days = ["H", "L", "M", "I", "J", "V", "S"];
  const hours = [];
  const subjects = [];
  for (let i = 7; i < 22; ++i) hours.push(`${i}00`);

  let i = 7;
  hours.forEach((hour) => {
    days.forEach((day) => {
      let subject = {};
      subject.code = day + hour;
      if (day === "H") {
        subject = { name: `${i}:00`, nrc: "" };
        ++i;
      } else if (data[day + hour]) subject = data[day + hour];
      else subject = { name: "", nrc: "" };
      subjects.push(subject);
    });
  });

  const daysLabels = [
    "",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
  ];
  return (
    <div className={classes.gridContainer}>
      {daysLabels.map((day) => (
        <div className={clsx(classes.gridItem, classes.gridItemsHeader)}>
          {day}
        </div>
      ))}
      {subjects.map((sub, i) => {
        const row = Math.floor(i / 7);
        return (
          <div
            className={clsx(classes.gridItem, row % 2 && classes.gridItemDark)}
            key={sub.code}
          >
            <span>{`${sub.nrc} ${sub.name}`}</span>
          </div>
        );
      })}
    </div>
  );
};
export default GridStyle;
