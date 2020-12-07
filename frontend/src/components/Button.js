import { Button as MuiButton, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    textTransform: "none",
  },
  outlined: {
    border: "3px solid !important",
  },
  white: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
}));

const Button = ({ children, className, color, variant, ...props }) => {
  const classes = useStyles();
  return (
    <MuiButton
      className={clsx(
        className,
        classes.root,
        variant === "outlined" && classes.outlined,
        color === "white" && classes.white
      )}
      color={color === "white" ? undefined : color}
      variant={variant}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
