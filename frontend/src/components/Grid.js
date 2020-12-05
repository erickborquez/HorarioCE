import { makeStyles } from "@material-ui/core";
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import "./Grid.css";

const useStyles = makeStyles((theme) => ({
  backgroundGrid: {
    background: theme.palette.primary.dark,
  },
}));
const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item"></div>
      <div className="grid-item">LUNES</div>
      <div className="grid-item">MARTES</div>
      <div className="grid-item">MIERCOLES</div>
      <div className="grid-item">JUEVES</div>
      <div className="grid-item">VIERNES</div>
      <div className="grid-item">SABADO</div>
      <div className="grid-item">0700-0855</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">0900-1055</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">1100-1255</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">1300-1455</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">1500-1655</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">1700-1855</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">1900-2055</div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </div>
  );
};

export default Grid;
