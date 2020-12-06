import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../theme";
import whiteLogo from "../assets/images/whiteLogo.svg";
import laptop from "../assets/images/laptop.svg";
import "./Landing.css";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    background: theme.palette.landing.main,
  },

  centerText: {
    textAlign: "center",
    display: "block",
    margin: "auto",
    width: "50%",
  },
  sideLogo: {
    // width: 100,
    // height: 100,
    width: "10%",
    margin: " 0 auto",
  },
  /* personalizado */
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className="main-container">
        <img
          src={whiteLogo}
          alt="Logo horarioCE"
          className={classes.sideLogo}
        />
        <h1>
          Crea tu horario
        </h1>
        <h2>
          personalizado
        </h2>
        <h5>
          Elige tus materias favoritas con los mejores profesores en el horario que mejor se acomode
        </h5>
        <img
          src={laptop}
          alt="png laptop"
          className="center"
          className={classes.sideLogo}
          className={classes.centerText}
        />
    </div>
  );
};

export default Landing;
