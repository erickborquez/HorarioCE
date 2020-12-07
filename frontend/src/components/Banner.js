import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "../components/Button";
import whiteLogo from "../assets/images/whiteLogo.svg";
import laptop from "../assets/images/laptop.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    minHeight: 1090,
    // marginBottom: 300,
    position: "relative",
  },
  container: {
    background: "linear-gradient(180deg,#8360c3 -100%, #2ebf91 100%)",
    height: "100%",
    clipPath: "ellipse(80% 70% at 50% 2%)",
    position: "relative",
  },
  textContainer: {
    width: 600,
    position: "absolute",
    top: "28%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    fontFamily: "Acme, sans-serif",
    fontSize: "80px",
    fontWeight: "normal",
    lineHeight: "60px",
  },
  titleSecondary: {
    fontFamily: "Satisfy, cursive",
    fontSize: "70px",
    lineHeight: "75px",
    fontWeight: "normal",
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "25px",
    marginTop: "25px",
    marginBottom: "25px",
  },
  logo: {
    width: 160,
    position: "absolute",
    top: "0%",
    left: "0%",
    transform: "translate(20px, 40px)",
  },
  buttons: {},
  button: {
    margin: "0 4px",
    fontWeight: 600,
  },
  laptop: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%,calc(-50% - 150px))",
    marginTop: "80px",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1 className={classes.title}>Crea tu horario</h1>
          <h2 className={classes.titleSecondary}>personalizado</h2>
          <h5 className={classes.text}>
            Elige tus materias favoritas con los mejores profesores en el
            horario que prefieras
          </h5>
          <div className={classes.buttons}>
            <Button
              style={{ border: "2px solid" }}
              className={classes.button}
              color="secondary"
              variant="outlined"
              size="large"
            >
              Aprende más
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              size="large"
            >
              Crear horario
            </Button>
          </div>
        </div>
      </div>
      <img src={whiteLogo} alt="Logo horarioCE" className={classes.logo} />

      <img
        src={laptop}
        alt="png laptop"
        width="750px"
        className={classes.laptop}
      />
    </div>
  );
};

export default Banner;
