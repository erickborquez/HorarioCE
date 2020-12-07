import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Button from "./Button";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  rootDark: {
    background: "#FAFAFA",
  },
  rootDisabled: {
    filter: "grayscale(1)",
  },

  number: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: 50,
    height: 50,
    borderRadius: 30,
    background: theme.palette.primary.main,
  },
  content: {
    textAlign: "center",
    margin: "0 auto",
    maxHeight: 0,
    maxWidth: 1200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    transition: "all .2s",
    overflow: "hidden",
  },
  open: {
    maxHeight: 2000,
    paddingTop: 50,
    paddingBottom: 16,
  },
  marginBottom: {
    height: 60,
  },
  buttons: {
    alignSelf: "flex-end",
  },
  button: {
    marginLeft: 8,
  },
}));
const Section = ({
  section,
  dark = false,
  children,
  open = false,
  disabled = false,
  onNext,
  onBack,
  nextLabel = "Continuar",
  backLabel = "Regresar",
  nextDisabled = false,
  backDisabled = false,
}) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        classes.root,
        dark && classes.rootDark,
        disabled && classes.rootDisabled
      )}
    >
      <div className={classes.number}>{section}</div>
      <div className={clsx(classes.content, open && classes.open)}>
        {children}
        <div className={classes.buttons}>
          {onBack && (
            <Button
              size="large"
              disabled={disabled || backDisabled}
              className={classes.button}
              color="white"
              variant="contained"
              onClick={onBack}
            >
              {backLabel}
            </Button>
          )}

          {onNext && (
            <Button
              size="large"
              disabled={disabled || nextDisabled}
              className={classes.button}
              color="secondary"
              variant="contained"
              onClick={onNext}
            >
              {nextLabel}
            </Button>
          )}
        </div>
      </div>
      <div className={classes.marginBottom} />
    </div>
  );
};

export default Section;
