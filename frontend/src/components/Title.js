import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 50,
    color: theme.palette.primary.main,
    fontWeight: 500,
    lineHeight: "45px",
    marginBottom: 16,
  },
}));
const Title = ({ children }) => {
  const classes = useStyles();
  return <h2 className={classes.root}>{children}</h2>;
};

export default Title;
