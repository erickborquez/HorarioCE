import { makeStyles } from "@material-ui/core";
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import "./GridStyle.css";

const useStyles = makeStyles((theme) => ({
  colorGrip: {
    background: theme.palette.grid.light,
  },
}));

const GridStyle = ({
  options,
  value,
  handleChange,
  nullInitialValue = false,
}) => {
  const data = {};
  options.forEach((option) => {
    let dates = option.dates;
    dates.forEach((date) => {
      let start = Number(date.start);
      let end = Number(date.end);
      let letter = date.day[0];
      if (date.day === "MIERCOLES") letter = "I";
      data[letter + String(start)] = option.name;
      if (end - start === 155) data[letter + String(start + 100)] = option.name;
    });
  });

  for (let key in data) {
    console.log(`${key}, ${data[key]}`);
  }

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

  subjects.forEach((sub) => {
    console.log(`${sub.code}, ${sub.name}`);
  });

  return (
    <div className="grid-container">
      <div className="grid-item"></div>
      <div className="grid-item">LUNES</div>
      <div className="grid-item">MARTES</div>
      <div className="grid-item">MIERCOLES</div>
      <div className="grid-item">JUEVES</div>
      <div className="grid-item">VIERNES</div>
      <div className="grid-item">SABADO</div>
      {subjects.map((sub) => (
        <div className="grid-item" key={sub.code}>
          {sub.name}
        </div>
      ))}
    </div>
  );
};

export default GridStyle;
