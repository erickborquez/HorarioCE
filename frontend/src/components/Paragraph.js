import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 27,
  },
}));

const Paragraph = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.root}>{children}</p>;
};

export default Paragraph;
