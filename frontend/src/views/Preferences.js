import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import theme from "../theme";
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      background: theme.palette.primary.dark,
      borderRadius: 10,
      
    },
  },

  sideLogo: {
    color: "secondary",

    font: theme.palette.secondary.light,
  },

  multilineColor: {
    color: theme.palette.secondary.light,
    
  },

  floatingLabelFocusStyle: {
    color: theme.palette.secondary.light,
  },
}));

const Preferences = () => {
  const [nrc, setNrc] = useState("");
  const [teacher, setTeacher] = useState("");

  
const onChange = (e) => {
    setNrc(e.target.value);
    //setTeacher(event.target.value);
  };

const onChangeTeacher = (e) => {
    setTeacher(e.target.value);
  };



  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.sideLogo}
        InputProps={{
          className: classes.multilineColor,
        }}
        onChange={onChange}
        id="standard-basic"
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle,
        }}
        variant="filled"
        label="NRC"
      />
      <br />
      <TextField
        InputProps={{
          className: classes.multilineColor,
        }}
        onChange={onChangeTeacher}
        id="standard-basic"
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle,
        }}
        variant="filled"
        label="MAESTRO"
      />
      <br />
      <Button 
        disabled = {!nrc && !teacher}
        color="secondary" 
        variant="contained">
        Continuar
      </Button>
    </form>
  );
};

export default Preferences;
